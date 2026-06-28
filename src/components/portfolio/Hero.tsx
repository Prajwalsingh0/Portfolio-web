import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-grid-shift opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--rule)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--rule)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--signal) / 0.25), transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
        {/* folio header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-5">
          <div className="eyebrow flex items-center gap-3">
            <span className="tick" />
            Volume 01 · Issue 2026 · Printed digitally
          </div>
          <div className="eyebrow">Software · Systems · Interface</div>
        </div>

        <div className="grid-editorial gap-y-6">
          {/* Left column: meta */}
          <aside className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-3">The Editor</div>
            <p className="font-display text-xl leading-tight">
              <span className="text-signal">—</span> Prajwal Singh
            </p>
            <p className="mt-1 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              CSE Graduate · Software Developer
            </p>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p className="text-balance">
                I build reliable backend systems in Java and Node.js — REST APIs, real-time apps, and database-backed services. I care about clean architecture and code that holds up under load.              </p>
              <p className="text-balance">
                Currently open to backend or full-stack roles. Based in Bhopal, open to remote or relocation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <a href="#commission" className="bg-foreground px-4 py-2.5 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background transition-colors hover:bg-signal">
                Commission →
              </a>
              <a href="/prajwal_singh_resume.pdf" download="Prajwal_Singh_Resume.pdf" className="border border-border px-4 py-2.5 font-mono-editorial text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-foreground bg-secondary/50">
                Download CV ↓
              </a>
              <a href="#work" className="border border-border px-4 py-2.5 font-mono-editorial text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-foreground">
                Read cases
              </a>
            </div>
          </aside>

          {/* Main headline */}
          <div className="col-span-12 md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[13vw] leading-[0.88] tracking-[-0.03em] md:text-[9.5vw]"
            >
              Problems,
              <br />
              <span className="italic text-muted-foreground">engineered</span>
              <br />
              <span>
                into <span className="bg-signal px-2 text-accent-foreground">systems.</span>
              </span>
            </motion.h1>

            <div className="mt-10 grid grid-cols-12 gap-5 border-t border-border pt-6">
              <div className="col-span-12 md:col-span-5">
                <div className="eyebrow mb-2">Abstract</div>
                <p className="text-pretty text-base text-foreground/85 md:text-lg">
                  A working journal of commissioned software — built for scale,
                  read like a magazine. Case studies on architecture,
                  interfaces, and the tradeoffs in between.
                </p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="eyebrow mb-2">Focus</div>
                <ul className="space-y-1 text-sm">
                  <li>Backend Development</li>
                  <li>REST APIs</li>
                  <li>Database Design</li>
                  <li>System Design</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              <div className="col-span-6 md:col-span-2">
                <div className="eyebrow mb-2">Status</div>
                <p className="text-sm">
                  <span className="inline-block h-2 w-2 translate-y-[-2px] bg-signal" />
                  <span className="ml-2">Open to internships & full-time opportunities</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Q2 · 2026</p>
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="eyebrow mb-2">Indexed</div>
                <p className="font-display text-4xl leading-none">4</p>
                <p className="mt-1 text-xs text-muted-foreground">case studies</p>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="mt-16 overflow-hidden border-y border-border py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                <span>Architecture</span>
                <span className="text-signal">✦</span>
                <span className="italic text-muted-foreground">Systems thinking</span>
                <span className="text-signal">✦</span>
                <span>Distributed web</span>
                <span className="text-signal">✦</span>
                <span className="italic text-muted-foreground">Cloud computing</span>
                <span className="text-signal">✦</span>
                <span>Editorial interfaces</span>
                <span className="text-signal">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
