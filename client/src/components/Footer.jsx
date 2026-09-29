import { identity } from "@/content/profile";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-faint">
          © {year} {identity.name} — built with React, Tailwind & too much coffee
        </p>
        <div className="flex items-center gap-6">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-faint transition-colors hover:text-ink"
          >
            github
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-faint transition-colors hover:text-ink"
          >
            linkedin
          </a>
          <a href="#hero" className="font-mono text-xs text-faint transition-colors hover:text-ink">
            top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
