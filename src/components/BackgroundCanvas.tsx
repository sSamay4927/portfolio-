import React, { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  interactive?: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle systems: Gold embers, Stars, and Fog waves
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
    }

    interface Ember {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      maxLife: number;
      life: number;
    }

    const stars: Star[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.7),
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    const embers: Ember[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: height * 0.4 + Math.random() * (height * 0.6),
      size: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.6 + 0.2),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.3,
      maxLife: 200 + Math.random() * 200,
      life: Math.random() * 200,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Professional Polish Deep Dark Canvas base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0A0A0A');
      bgGrad.addColorStop(0.5, '#0E0E0E');
      bgGrad.addColorStop(1, '#080808');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Gold glow around mouse
      if (interactive) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
        mouseGlow.addColorStop(0, 'rgba(197, 160, 89, 0.08)');
        mouseGlow.addColorStop(0.5, 'rgba(197, 160, 89, 0.02)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Top right accent glow
      const moonGlow = ctx.createRadialGradient(width * 0.9, height * 0.1, 0, width * 0.9, height * 0.1, 500);
      moonGlow.addColorStop(0, 'rgba(197, 160, 89, 0.06)');
      moonGlow.addColorStop(0.4, 'rgba(197, 160, 89, 0.02)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = moonGlow;
      ctx.fillRect(0, 0, width, height);

      // Celestial Stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * 2 + star.x) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(243, 229, 171, ${star.alpha * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle celestial navigational ring / astrolabe faint geometry
      ctx.save();
      ctx.translate(width * 0.5, height * 0.5);
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, Math.min(width, height) * 0.42, 0, Math.PI * 2);
      ctx.setLineDash([4, 12]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Atmospheric Water / Mist Layer at bottom
      const mistHeight = height * 0.45;
      const mistGrad = ctx.createLinearGradient(0, height - mistHeight, 0, height);
      mistGrad.addColorStop(0, 'rgba(10, 18, 30, 0)');
      mistGrad.addColorStop(0.5, 'rgba(8, 14, 25, 0.5)');
      mistGrad.addColorStop(1, 'rgba(4, 7, 13, 0.95)');
      ctx.fillStyle = mistGrad;
      ctx.fillRect(0, height - mistHeight, width, mistHeight);

      // Wave shimmer lines in harbor water
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const yOffset = height - 120 + i * 28;
        ctx.moveTo(0, yOffset);
        for (let x = 0; x < width; x += 40) {
          const wave = Math.sin(x * 0.008 + time * 1.5 + i) * 6;
          ctx.lineTo(x, yOffset + wave);
        }
        ctx.stroke();
      }

      // Floating golden embers (like harbor torch embers)
      embers.forEach((ember) => {
        ember.y += ember.speedY;
        ember.x += ember.speedX + Math.sin(time + ember.y * 0.01) * 0.2;
        ember.life += 1;

        if (ember.life > ember.maxLife || ember.y < 0) {
          ember.y = height * 0.6 + Math.random() * (height * 0.4);
          ember.x = Math.random() * width;
          ember.life = 0;
        }

        const lifeRatio = 1 - ember.life / ember.maxLife;
        const currentOpacity = ember.opacity * lifeRatio;

        ctx.fillStyle = `rgba(224, 186, 109, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow ring for ember
        ctx.fillStyle = `rgba(197, 160, 89, ${currentOpacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Vignette framing
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.3,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(0.7, 'rgba(3, 5, 8, 0.45)');
      vignette.addColorStop(1, 'rgba(2, 3, 5, 0.92)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};
