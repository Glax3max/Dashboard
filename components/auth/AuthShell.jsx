export default function AuthShell({ heading, description, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-5xl items-center gap-6 px-6 py-12 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Qyuro AI
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white">
            {heading}
          </h1>
          <p className="mt-3 text-sm text-slate-400">{description}</p>

          <div className="mt-8 grid gap-4">
            {[
              "Curate collections from your research",
              "Upload visuals and summarize instantly",
              "Track citations and highlight takeaways"
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          {children}
        </section>
      </div>
    </div>
  );
}
