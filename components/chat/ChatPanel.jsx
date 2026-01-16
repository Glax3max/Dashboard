import { conversation } from "@/data/chat-data";

export default function ChatPanel() {
  return (
    <section className="flex min-h-[360px] flex-1 flex-col gap-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Responses
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            Conversation canvas
          </p>
        </div>
        <span className="rounded-full border border-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
          Live
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <div className="flex flex-col gap-4">
          {conversation.map((message) => {
            const isUser = message.role === "user";
            return (
              <div
                key={message.id}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-soft transition ${
                    isUser
                      ? "bg-violet-500/20 text-white"
                      : "bg-slate-950/70 text-slate-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Output
        </p>
        <div className="mt-3 h-24 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-400 shadow-inner">
          Responses appear here with citations, images, and follow ups.
        </div>
      </div>
    </section>
  );
}
