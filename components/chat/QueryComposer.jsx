import { quickPrompts } from "@/data/chat-data";

export default function QueryComposer() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-soft">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Query
          </label>
          <textarea
            rows={3}
            placeholder="Ask anything or drop a brief..."
            className="mt-3 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-56">
          <label
            htmlFor="image-upload"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-violet-500/60 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Upload images
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
          />
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
            Send query
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-violet-500/50 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}
