import { useEffect, useRef } from "react";

// Fixed, theme-aware background layer: a faint dot grid masked to the top
// and two slow-drifting accent glows that also parallax gently with the
// pointer. Sits behind everything (z-index -1).
export default function Backdrop() {
  const aRef = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        if (aRef.current) aRef.current.style.translate = `${x * 40}px ${y * 30}px`;
        if (bRef.current) bRef.current.style.translate = `${x * -30}px ${y * -22}px`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-dots" />
      <div ref={aRef} className="backdrop-glow backdrop-glow-a" />
      <div ref={bRef} className="backdrop-glow backdrop-glow-b" />
    </div>
  );
}
