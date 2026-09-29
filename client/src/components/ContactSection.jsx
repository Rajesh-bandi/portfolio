import { contact, identity } from "@/content/profile";
import Reveal from "@/components/Reveal";

export const ContactSection = () => {
  const channels = [
    { label: "Email", value: identity.email, href: `mailto:${identity.email}` },
    { label: "Phone", value: identity.phone, href: `tel:${identity.phone.replace(/\s/g, "")}` },
    { label: "Location", value: identity.location, href: null },
  ];

  return (
    <section id="contact" className="section-block border-t border-edge">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">04 — Contact</p>

          <a href={`mailto:${identity.email}`} className="group mt-6 block">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
              {contact.title}
            </h2>
            <p className="email-link mt-8 inline-flex items-center gap-3 text-lg text-dim transition-colors group-hover:text-ink">
              {identity.email}
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </p>
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 grid gap-px border border-edge bg-edge sm:grid-cols-3">
            {channels.map((channel) => {
              const body = (
                <>
                  <p className="eyebrow">{channel.label}</p>
                  <p className="mt-3 text-sm font-medium sm:text-base">{channel.value}</p>
                </>
              );
              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="lift bg-background p-6 transition-colors hover:bg-raised"
                >
                  {body}
                </a>
              ) : (
                <div key={channel.label} className="bg-background p-6">
                  {body}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim transition-colors hover:text-ink"
          >
            github →
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim transition-colors hover:text-ink"
          >
            linkedin →
          </a>
          {identity.available && (
            <span className="ml-auto inline-flex items-center gap-2 font-mono text-xs text-faint">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              usually replies within a day
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
