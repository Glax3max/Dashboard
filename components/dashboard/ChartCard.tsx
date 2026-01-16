const ranges = ["30D", "90D", "1Y"];

export default function ChartCard() {
  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            Sales Overview
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Revenue trend for the last 30 days
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 text-xs font-semibold text-slate-500">
          {ranges.map((range) => (
            <button
              key={range}
              className={`rounded-full px-3 py-1 transition ${
                range === "30D"
                  ? "bg-slate-900 text-white shadow-soft"
                  : "hover:text-slate-900"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(180deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div
          className="absolute inset-x-6 bottom-6 top-8 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-80 shadow-soft animate-line"
          style={{
            clipPath:
              "polygon(0% 70%, 12% 60%, 24% 65%, 36% 40%, 48% 45%, 60% 30%, 72% 35%, 84% 25%, 100% 40%, 100% 100%, 0% 100%)"
          }}
        />
        <div className="absolute inset-x-6 bottom-4 flex items-center justify-between text-xs text-slate-400">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Current month
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">$24,860</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Forecast
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">$28,410</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Avg order
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">$326</p>
        </div>
      </div>
    </article>
  );
}
