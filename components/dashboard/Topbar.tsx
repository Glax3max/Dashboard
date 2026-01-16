import { topbarCopy } from "@/lib/dashboard-data";

export default function Topbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-card">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {topbarCopy.eyebrow}
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-slate-900">
          {topbarCopy.title}
        </h1>
        <p className="mt-1 text-sm text-slate-500">{topbarCopy.date}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-slate-500 shadow-inner transition focus-within:ring-2 focus-within:ring-violet-500/40">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
            <path d="M20 20l-4-4" />
          </svg>
          <input
            aria-label="Search reports and teams"
            className="w-40 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none sm:w-56"
            placeholder="Search reports, teams..."
            type="text"
          />
        </div>

        <button
          aria-label="Notifications"
          className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9a6 6 0 1 1 12 0c0 5 2 5.5 2 7H4c0-1.5 2-2 2-7z" />
            <path d="M9.5 19a2.5 2.5 0 0 0 5 0" />
          </svg>
        </button>
        <button
          aria-label="Settings"
          className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
            <path d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.2-2-3.5-2.2.7a7.4 7.4 0 0 0-1.7-1l-.4-2.3H8.8l-.4 2.3a7.4 7.4 0 0 0-1.7 1l-2.2-.7-2 3.5L4.6 14a7.8 7.8 0 0 0 .1 1l-2.1 1.3 2 3.4 2.3-.6a7.6 7.6 0 0 0 1.6 1l.5 2.2h4l.5-2.2a7.6 7.6 0 0 0 1.6-1l2.3.6 2-3.4z" />
          </svg>
        </button>

        <button className="rounded-xl bg-qyuro-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
          Generate Report
        </button>
      </div>
    </header>
  );
}
