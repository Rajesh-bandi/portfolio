import { projects } from "@/content/profile";
import Reveal from "@/components/Reveal";
import { useInViewOnce } from "@/hooks/useScrollProgress";
import ProjectGlyph from "@/components/ProjectGlyph";

const ProjectCard = ({ project }) => {
  // .glyph-drawn starts the outline-draw + loop animations once in view;
  // .glyph-anim (hover) speeds every animation up.
  const { ref, inView } = useInViewOnce();

  return (
    <article
      ref={ref}
      className={`project-card bg-background p-6 transition-colors hover:bg-raised sm:p-10 ${
        inView ? "glyph-drawn" : ""
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Meta column with the project glyph */}
        <div className="lg:col-span-3">
          <div
            className="hidden lg:block"
            onMouseEnter={(e) => e.currentTarget.classList.add("glyph-anim")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("glyph-anim")}
          >
            <ProjectGlyph id={project.id} />
          </div>
          <p className="mt-4 font-mono text-xs text-faint">{project.year}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-dim">{project.subtitle}</p>
          <span
            className="mt-4 inline-block border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors"
            style={{ color: project.accent, borderColor: `${project.accent}55` }}
          >
            {project.status}
          </span>
        </div>

        {/* Body column */}
        <div className="lg:col-span-9">
          <p className="max-w-3xl text-sm leading-relaxed text-dim sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-baseline gap-3 text-sm text-dim">
                <span
                  className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{ backgroundColor: project.accent }}
                />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-edge px-2.5 py-1 font-mono text-[11px] text-faint transition-colors hover:border-edge-strong hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link ml-auto inline-flex items-center gap-2 font-mono text-xs text-dim transition-colors hover:text-ink"
            >
              source
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-block border-t border-edge">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">03 — Work</p>
          <h2 className="mt-6 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
            Three projects that taught me the most.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-px border border-edge bg-edge">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
