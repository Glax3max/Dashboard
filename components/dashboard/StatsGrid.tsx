import { dashboardStats } from "@/lib/dashboard-data";

export default function StatsGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <article
          key={stat.label}
          className="group rounded-2xl bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-sm text-slate-500">{stat.label}</p>
          <div className="mt-3 flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              {stat.value}
            </h2>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                stat.negative
                  ? "bg-rose-100 text-rose-600"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">{stat.note}</p>
        </article>
      ))}
    </section>
  );
}
