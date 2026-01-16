import { collections } from "@/data/chat-data";

export default function CollectionSidebar() {
  return (
    <aside className="hidden w-72 flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-soft lg:flex">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Collections
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Your library</p>
        </div>
        <button className="rounded-xl bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700">
          New
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {collections.map((collection) => (
          <button
            key={collection.id}
            className={`group flex flex-col gap-2 rounded-2xl border px-4 py-3 text-left transition ${
              collection.active
                ? "border-violet-500/40 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-white shadow-soft"
                : "border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-800/80"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{collection.title}</p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-300">
                {collection.itemCount}
              </span>
            </div>
            <p className="text-xs text-slate-400">{collection.description}</p>
          </button>
        ))}
      </div>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
        <p className="text-sm font-semibold text-white">Team members</p>
        <div className="mt-3 flex items-center gap-2">
          {["AR", "KM", "JL", "SB"].map((initials) => (
            <span
              key={initials}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-200"
            >
              {initials}
            </span>
          ))}
          <span className="text-xs text-slate-400">+3 online</span>
        </div>
      </div>
    </aside>
  );
}
