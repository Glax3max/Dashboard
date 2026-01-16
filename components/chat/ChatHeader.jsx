export default function ChatHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-soft">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Qyuro Workspace
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-white">
          Ask, upload, and organize your research
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Powered by collaborative collections and real-time answers.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
          New chat
        </button>
        <button className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
          Share
        </button>
      </div>
    </header>
  );
}
