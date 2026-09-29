import { useEffect, useState } from "react";
import { navItems, identity } from "@/content/profile";
import { getTheme, toggleTheme, subscribeTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

// Hairline that fills across the top of the page as the user scrolls.
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 h-px bg-edge" aria-hidden="true">
      <div
        className="h-full bg-ink/60"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setThemeState] = useState(() => getTheme());

  useEffect(() => subscribeTheme(setThemeState), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-edge bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight">
          <img
            src={identity.avatar}
            alt=""
            className="h-7 w-7 rounded-full border border-edge-strong object-cover"
          />
          RB
          <span className="text-faint">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm text-dim transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-edge-strong text-dim transition-colors hover:border-dim hover:text-ink"
          >
            {theme === "dark" ? (
              // sun
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              // moon
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-edge-strong px-4 py-2 text-xs font-medium text-dim transition-colors hover:border-dim hover:text-ink"
          >
            Resume
          </a>
        </div>
      </nav>

      {scrolled && <ScrollProgress />}
    </header>
  );
};
