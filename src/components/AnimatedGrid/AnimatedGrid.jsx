import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function AnimatedGrid() {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const signalRef = useRef({ particles: [], time: 0, frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let rafId;
    let w, h, cols, rows, spacing;
    let isMobile;

    function resize() {
      isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
      spacing = isMobile ? 60 : 48;
      cols = Math.floor(w / spacing);
      rows = Math.floor(h / spacing);
    }

    const particles = [];
    class Signal {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * 0.3;
        this.vy = Math.sin(angle) * 0.3;
        this.life = 1;
        this.decay = 0.002 + Math.random() * 0.004;
        this.size = isMobile ? 1 : 1.5 + Math.random() * 1.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw(ctx) {
        const alpha = this.life * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 116, 217, ${alpha})`;
        ctx.fill();
        ctx.shadowColor = "rgba(0, 116, 217, 0.4)";
        ctx.shadowBlur = isMobile ? 4 : 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particleCount = isMobile ? 20 : 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Signal());
    }

    signalRef.current.particles = particles;

    function drawGrid(scrollY) {
      ctx.clearRect(0, 0, w, h);
      const scrollOffset = scrollY * 100;
      const pulsePhase = signalRef.current.time;

      ctx.strokeStyle = "rgba(0, 116, 217, 0.06)";
      ctx.lineWidth = 0.5;
      for (let c = 0; c <= cols; c++) {
        const x = c * spacing;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        const y = (r * spacing + scrollOffset * 0.02) % (h + spacing);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const gx = c * spacing;
          const gy = (r * spacing + scrollOffset * 0.02) % (h + spacing);
          const dist = Math.sin(gx * 0.005 + gy * 0.005 + pulsePhase * 0.5) * 0.5 + 0.5;
          if (dist > 0.85) {
            const alpha = (dist - 0.85) * (isMobile ? 0.5 : 0.7);
            ctx.fillStyle = `rgba(0, 116, 217, ${alpha})`;
            ctx.shadowColor = `rgba(0, 116, 217, ${alpha * 0.5})`;
            ctx.shadowBlur = isMobile ? 0 : 8;
            ctx.fillRect(gx - 0.5, gy - 0.5, 1, 1);
            ctx.shadowBlur = 0;
          }
        }
      }

      if (!isMobile) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const glowY = (pulsePhase * 60 + scrollOffset * 0.03) % (h + 200) - 100;
          const glowAlpha = Math.max(0, 0.15 - Math.abs(glowY - h / 2) / (h * 0.3));
          if (glowAlpha > 0.02) {
            ctx.beginPath();
            ctx.moveTo(x, glowY - 60);
            ctx.lineTo(x, glowY + 60);
            ctx.strokeStyle = `rgba(0, 116, 217, ${glowAlpha})`;
            ctx.lineWidth = 1.5;
            ctx.shadowColor = `rgba(0, 116, 217, ${glowAlpha * 0.6})`;
            ctx.shadowBlur = 15;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
    }

    function animate() {
      if (!canvasRef.current) return;
      signalRef.current.frame++;
      if (isMobile && signalRef.current.frame % 2 !== 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      signalRef.current.time += 0.005;
      drawGrid(scrollYProgress.get());
      rafId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ willChange: "transform" }}
    />
  );
}
