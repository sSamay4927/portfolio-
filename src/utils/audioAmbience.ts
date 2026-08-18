// Ambient sound generator for background music
class SeaAmbienceEngine {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  constructor() {
    // Initialize audio element only in browser environment
    if (typeof window !== 'undefined') {
      this.audio = new Audio('/assets/bgm.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.5; // adjust volume as needed
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.audio) {
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch((e) => {
        console.error("Audio playback failed:", e);
        this.isPlaying = false;
      });
    }
  }

  public stop() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const seaAmbience = new SeaAmbienceEngine();
