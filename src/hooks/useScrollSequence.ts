import { useEffect, useRef, useState } from 'react';

interface UseScrollSequenceProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  frameCount: number;
  framePath: (index: number) => string;
}

export function useScrollSequence({ canvasRef, frameCount, framePath }: UseScrollSequenceProps) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  // 1. Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    
    // We want the first frame immediately for the initial render
    const firstImg = new Image();
    firstImg.src = framePath(1);
    firstImg.onload = () => {
      loadedCount++;
      setLoaded(loadedCount);
      // Draw first frame immediately once loaded
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.drawImage(firstImg, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    images[0] = firstImg;

    // Load the rest
    for (let i = 2; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      images[i - 1] = img;
    }

    imagesRef.current = images;
  }, [frameCount, framePath, canvasRef]);

  // 2. Handle scrolling and canvas drawing with adaptive lerp
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false }); // alpha false is an optimization
    if (!canvas || !ctx) return;

    let targetFrame = 0;
    let currentFrame = 0;
    let animationFrameId: number;
    let isFirstFrame = true;

    // Fix canvas rendering resolution to match CSS display size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Force a redraw of the current frame on resize
      const img = imagesRef.current[Math.round(currentFrame)];
      if (img && img.complete) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial sizing

    const onScroll = () => {
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // The user wants the animation to finish in 4 sections.
      // We look for the 5th section ('dispatch') and end the sequence there.
      const dispatchSection = document.getElementById('dispatch');
      if (dispatchSection) {
        maxScroll = dispatchSection.offsetTop;
      }

      const progress = Math.min(Math.max(window.scrollY / (maxScroll || 1), 0), 1);
      // Frame index from 0 to frameCount - 1
      targetFrame = progress * (frameCount - 1);
    };

    const updateFrame = () => {
      const distance = Math.abs(targetFrame - currentFrame);

      if (isFirstFrame) {
        currentFrame = targetFrame;
        isFirstFrame = false;
      } else if (distance > frameCount * 0.25) {
        currentFrame = targetFrame;
      } else {
        const adaptiveFactor = Math.min(0.18 + distance * 0.05, 0.95);
        currentFrame += (targetFrame - currentFrame) * adaptiveFactor;
      }

      const frameIndex = Math.round(currentFrame);
      const img = imagesRef.current[frameIndex];

      // Draw if image is fully loaded
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    onScroll();
    currentFrame = targetFrame;
    
    window.addEventListener('scroll', onScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef, frameCount]);

  return { loadedProgress: loaded / frameCount };
}
