import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const projectTypes = ["Web app", "API / Backend", "System design", "Data processing", "Other"];
const timelines = ["< 2 weeks", "2–6 weeks", "1–3 months", "Ongoing"];

const Commission = () => {
  const [type, setType] = useState("Web app");
  const [timeline, setTimeline] = useState("2–6 weeks");

  useEffect(() => {
    const saved = localStorage.getItem("commission_brief_draft");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.projectType) setType(data.projectType);
        if (data.timeline) setTimeline(data.timeline);
        
        const formElement = document.getElementById("commission-form") as HTMLFormElement;
        if (formElement) {
          Object.keys(data).forEach((key) => {
            const input = formElement.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | null;
            if (input) {
              input.value = data[key];
            }
          });
        }
      } catch (e) {
        console.error("Failed to restore form draft", e);
      }
    }
  }, []);

  const saveDraft = () => {
    const formElement = document.getElementById("commission-form") as HTMLFormElement;
    if (!formElement) return;
    const data: Record<string, string> = {};
    const formData = new FormData(formElement);
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    data["projectType"] = type;
    data["timeline"] = timeline;

    localStorage.setItem("commission_brief_draft", JSON.stringify(data));
    toast({
      title: "Draft saved",
      description: "Your brief progress has been stored locally.",
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("projectType", type);
    formData.append("timeline", timeline);

    try {
      const response = await fetch("https://formspree.io/f/myklbadv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        localStorage.removeItem("commission_brief_draft");
        toast({
          title: "Inquiry sent",
          description: "Your brief has been submitted successfully.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your brief. Please try again.",
      });
    }
  };

  return (
    <section id="commission" className="relative overflow-hidden border-b border-border bg-foreground text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--background)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[30rem] w-[30rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--signal) / 0.5), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid-editorial items-end border-b border-background/20 pb-8">
          <div className="col-span-12 md:col-span-8">
            <div className="mb-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/60">
              Section 04 · Open for commission
            </div>
            <h2 className="font-display text-5xl leading-[0.92] tracking-tight md:text-8xl">
              Commission a
              <br />
              <span className="italic">piece of work</span>
              <span className="text-signal">.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm text-background/70 md:col-span-4 md:justify-self-end">
            Not a contact form. A brief. Tell me the shape of the problem and
            I&apos;ll reply with an approach, a scope, and a timeline.
          </p>
        </div>

        <form id="commission-form" onSubmit={onSubmit} className="grid-editorial mt-10 gap-y-8">
          {/* Project type */}
          <div className="col-span-12 md:col-span-6">
            <div className="mb-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/60">
              01 · Project type
            </div>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`border px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] transition-colors ${type === t ? "border-signal bg-signal text-accent-foreground" : "border-background/30 text-background/80 hover:border-background"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-12 md:col-span-6">
            <div className="mb-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/60">
              02 · Timeline
            </div>
            <div className="flex flex-wrap gap-2">
              {timelines.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className={`border px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] transition-colors ${timeline === t ? "border-signal bg-signal text-accent-foreground" : "border-background/30 text-background/80 hover:border-background"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <FieldLine label="03 · Your name" name="name" placeholder="Ada Lovelace" required />
          <FieldLine label="04 · Email" name="email" type="email" placeholder="ada@analytical.engine" required />
          <FieldLine label="05 · Tech preference (optional)" name="tech" placeholder="React, Go, Postgres…" />
          <FieldLine label="06 · Budget range (optional)" name="budget" placeholder="Open to discuss" />

          <div className="col-span-12">
            <div className="mb-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/60">
              07 · Requirements
            </div>
            <textarea
              name="requirements"
              rows={6}
              required
              placeholder="Describe the problem, the users, and what success looks like."
              className="w-full resize-none border-b border-background/30 bg-transparent py-3 font-display text-2xl leading-snug text-background placeholder:text-background/40 focus:border-signal focus:outline-none md:text-3xl"
            />
          </div>

          <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 border-t border-background/20 pt-6">
            <label className="inline-flex cursor-pointer items-center gap-3 border border-background/30 px-3 py-2 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/80 hover:border-background">
              <span>↑ Attach references</span>
              <input type="file" multiple className="hidden" />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={saveDraft}
                className="border border-background/30 px-4 py-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/80 hover:border-background"
              >
                Save draft
              </button>
              <button
                type="submit"
                className="bg-signal px-5 py-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Submit brief →
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

const FieldLine = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="col-span-12 md:col-span-6">
    <div className="mb-3 font-mono-editorial text-[11px] uppercase tracking-[0.18em] text-background/60">
      {label}
    </div>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full border-b border-background/30 bg-transparent py-3 font-display text-2xl text-background placeholder:text-background/40 focus:border-signal focus:outline-none"
    />
  </div>
);

export default Commission;
