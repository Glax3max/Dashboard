import { activityFeed } from "@/lib/dashboard-data";

export default function ActivityCard() {
  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            Live Activity
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Latest team updates and actions
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-700">
          View all
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {activityFeed.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-between gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-violet-100 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-qyuro-500 shadow-soft" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              {item.tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
