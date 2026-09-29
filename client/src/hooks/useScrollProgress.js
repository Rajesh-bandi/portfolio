import { useEffect, useRef, useState } from "react";

// Returns { ref, progress } where progress goes 0 → 1 as the element's top
// travels from the viewport bottom to ~35% up the viewport.
export function useScrollProgress(startOffset = 0.9) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const trigger = vh * startOffset;
      const p = Math.min(1, Math.max(0, (trigger - rect.top) / (trigger * 0.75)));
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startOffset]);

  return { ref, progress };
}

// One-shot: true once the element has entered the viewport (for reveal-ins).
export function useInViewOnce(margin = "0px 0px -10% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, margin]);

  return { ref, inView };
}
