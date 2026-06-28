const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-10">
        <div className="grid grid-cols-12 gap-4 border-t border-border pt-8">
          <div className="col-span-12 md:col-span-6">
            <p className="font-display text-3xl leading-tight md:text-5xl">
              Thanks for
              <br />
              <span className="italic text-muted-foreground">reading the issue</span>
              <span className="text-signal">.</span>
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow mb-3">Elsewhere</div>
            <ul className="space-y-1 text-sm">
              <li><a href="https://github.com/Prajwalsingh0" className="hover-underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/prajwalsingh20" className="hover-underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" className="hover-underline">Twitter / X</a></li>
              <li><a href="/prajwal_singh_resume.pdf" download="Prajwal_Singh_Resume.pdf" className="hover-underline">Download CV</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow mb-3">Contact</div>
            <ul className="space-y-1 text-sm">
              <li>prajwalsingh344@gmail.com</li>
              <li className="text-muted-foreground">Replies within 48h</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow mb-3">Colophon</div>
            <p className="text-sm text-muted-foreground">
              Set in Fraunces & Inter Tight. Built with React, Tailwind, and
              Framer Motion.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} · Prajwal Singh</span>
          <span>Index № 001 · Printed on the open web</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-signal" /> All systems nominal
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
