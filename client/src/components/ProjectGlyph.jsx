// Per-project animated glyphs — abstract line diagrams that "represent" the
// project. Outlines draw once when revealed (parent gets .glyph-drawn), then
// a moving element loops; all of it speeds up while the card is hovered
// (parent gets .glyph-anim).
const box = { width: 48, height: 48, viewBox: "0 0 48 48" };

const GlyphTunnel = () => (
  // TunnelFlow: two endpoints joined by a tunnel; packets flow through it.
  <svg {...box} aria-hidden="true">
    <rect x="3" y="16" width="10" height="16" className="draw" />
    <rect x="35" y="16" width="10" height="16" className="draw" />
    <path d="M13 24h22" className="flow" />
    <path d="M13 24h22" className="packet" />
  </svg>
);

const GlyphSecure = () => (
  // Secure Notes: a lock body whose shackle is checked by a scanning line.
  <svg {...box} aria-hidden="true">
    <rect x="14" y="21" width="20" height="17" className="draw" />
    <path d="M18 21v-5a6 6 0 0 1 12 0v5" className="draw" />
    <line x1="12" y1="8" x2="12" y2="40" className="scan" />
  </svg>
);

const GlyphCloud = () => (
  // Wander (cloud pipeline): repo pushed along a track, plane ships it to
  // the cloud while a dial spins.
  <svg {...box} aria-hidden="true">
    <path d="M30.5 22.5a7.5 7.5 0 0 0-14.6-2 6 6 0 0 0 .6 11.9h13a5.5 5.5 0 0 0 1-9.9z" className="draw" />
    <path d="M4 42l40-30" className="track" />
    <path d="M4 42l40-30" className="flow" />
    <g className="spin">
      <circle cx="24" cy="8" r="4.5" />
      <path d="M24 3.5v2M24 10.5v2M19.5 8h2M26.5 8h2" />
    </g>
  </svg>
);

const GLYPHS = {
  tunnelflow: GlyphTunnel,
  "secure-notes": GlyphSecure,
  "wander-cloud": GlyphCloud,
};

export default function ProjectGlyph({ id }) {
  const Glyph = GLYPHS[id];
  return Glyph ? (
    <div className="project-glyph text-faint transition-colors duration-300">
      <Glyph />
    </div>
  ) : null;
}
