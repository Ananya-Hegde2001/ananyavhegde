"use client";
import { useEffect, useRef } from "react";

interface Settings {
  density: number;
  size: number;
  life: number;
  drag: number;
  speed: number;
  palette: string[];
  maxParticles: number;
}

interface Particle {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number; size: number; color: string;
}

export function ParticlesCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, px: -9999, py: -9999 });
  const isDarkRef = useRef(true);
  const settings = useRef<Settings>({
    density: 20,
    size: 1,
    life: 90,
    drag: 0.92,
    speed: 1,
    palette: ["#7c3aed", "#3b82f6", "#06b6d4"], // dark default
    maxParticles: 3000,
  });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function applyThemePalette() {
      const isDark = document.documentElement.classList.contains("dark");
      isDarkRef.current = isDark;
      // Light theme: slightly deeper hues for contrast (avoid wash-out)
      settings.current.palette = isDark
        ? ["#7c3aed", "#3b82f6", "#06b6d4"]
        : ["#5b21b6", "#1d4ed8", "#047b94", "#4338ca"]; // darker variants for visibility
      if (canvasRef.current) {
        // Screen works great on dark, but washes out on light; use normal on light
        canvasRef.current.style.mixBlendMode = isDark ? "screen" : "normal";
      }
    }
    applyThemePalette();

    const themeObserver = new MutationObserver(() => {
      applyThemePalette();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    function resize() {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function spawn(x: number, y: number, count: number) {
      const s = settings.current;
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length >= s.maxParticles) break;
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 1.6 + 0.2) * s.speed;
        particlesRef.current.push({
          x,
            y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: Math.floor(s.life * (0.7 + Math.random() * 0.6)),
          maxLife: s.life,
          size: s.size * (0.7 + Math.random() * 0.8),
          color: s.palette[Math.floor(Math.random() * s.palette.length)],
        });
      }
    }

    function frame() {
      rafRef.current = requestAnimationFrame(frame);
      const s = settings.current;
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn logic based on mouse movement magnitude
      const { x, y, px, py } = mouseRef.current;
      const dx = x - px;
      const dy = y - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (x > -9000) {
        const base = s.density;
        const mult = dist > 0 ? Math.min(2, dist / 8) : 0.2;
        const spawnCount = Math.min(40, Math.floor(base * mult));
        if (spawnCount > 0) spawn(x, y, spawnCount);
      }

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.vx *= s.drag;
        p.vy *= s.drag;
        // gentle attraction towards cursor when on screen
        if (mouseRef.current.x > -9000) {
          const ax = (mouseRef.current.x - p.x) * 0.002;
          const ay = (mouseRef.current.y - p.y) * 0.002;
          p.vx += ax;
          p.vy += ay;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        if (p.life <= 0) {
          arr.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        if (ctx) {
          // Boost minimum alpha a bit in light mode so particles remain visible
          const alpha = isDarkRef.current ? t : Math.min(1, t * 0.85 + 0.15);
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(p.x, p.y, p.size * (0.6 + 0.4 * t), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Smooth mouse interpolation for spawn direction effect
      mouseRef.current.px += (mouseRef.current.x - mouseRef.current.px) * 0.2;
      mouseRef.current.py += (mouseRef.current.y - mouseRef.current.py) * 0.2;
    }
    rafRef.current = requestAnimationFrame(frame);

    function move(e: PointerEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    function leave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);

    // Accessibility: respect reduced motion
    const r = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (r.matches) {
      particlesRef.current = [];
      cancelAnimationFrame(rafRef.current!);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[70] select-none"
      aria-hidden
    />
  );
}
