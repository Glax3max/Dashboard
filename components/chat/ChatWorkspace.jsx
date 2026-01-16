import ChatHeader from "./ChatHeader";
import ChatPanel from "./ChatPanel";
import CollectionSidebar from "./CollectionSidebar";
import QueryComposer from "./QueryComposer";

export default function ChatWorkspace() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-[1400px] gap-6 px-6 py-6">
        <CollectionSidebar />
        <main className="flex min-w-0 flex-1 flex-col gap-6">
          <ChatHeader />
          <QueryComposer />
          <ChatPanel />
        </main>
      </div>
    </div>
  );
}
