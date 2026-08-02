import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId;

    const isDark = () => document.documentElement.classList.contains("dark");

    // Particles
    const PARTICLE_COUNT = Math.min(80, Math.floor((width * height) / 18000));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // Floating Orbs
    const orbs = [
      { x: width * 0.15, y: height * 0.25, r: 220, vx: 0.2, vy: 0.15, hue: 260 },
      { x: width * 0.8,  y: height * 0.6,  r: 180, vx: -0.18, vy: -0.12, hue: 200 },
      { x: width * 0.5,  y: height * 0.85, r: 150, vx: 0.15, vy: -0.2, hue: 280 },
    ];

    const MAX_CONNECT_DIST = 130;
    let frame = 0;

    const draw = () => {
      frame++;
      const dark = isDark();
      ctx.clearRect(0, 0, width, height);

      // Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r || orb.x > width + orb.r) orb.vx *= -1;
        if (orb.y < -orb.r || orb.y > height + orb.r) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        if (dark) {
          grad.addColorStop(0, `hsla(${orb.hue}, 70%, 60%, 0.07)`);
          grad.addColorStop(1, `hsla(${orb.hue}, 70%, 60%, 0)`);
        } else {
          grad.addColorStop(0, `hsla(${orb.hue}, 60%, 55%, 0.05)`);
          grad.addColorStop(1, `hsla(${orb.hue}, 60%, 55%, 0)`);
        }
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Particles + connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(167,139,250,${p.opacity})`
          : `rgba(124,58,237,${p.opacity * 0.6})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_CONNECT_DIST) {
            const alpha = (1 - dist / MAX_CONNECT_DIST) * (dark ? 0.15 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = dark
              ? `rgba(167,139,250,${alpha})`
              : `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};
