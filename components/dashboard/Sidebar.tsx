import type { ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
  active?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "#",
    active: true,
    icon: (
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
        <path d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" />
      </svg>
    )
  },
  {
    label: "Insights",
    href: "#",
    icon: (
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
        <path d="M5 19V5M9 17l4-4 3 3 3-6" />
      </svg>
    )
  },
  {
    label: "Projects",
    href: "#",
    icon: (
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
        <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      </svg>
    )
  },
  {
    label: "Calendar",
    href: "#",
    icon: (
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
        <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M8 2v4M16 2v4M4 10h16" />
      </svg>
    )
  },
  {
    label: "Messages",
    href: "#",
    icon: (
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
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4v-4H6a2 2 0 0 1-2-2z" />
      </svg>
    )
  },
  {
    label: "Settings",
    href: "#",
    icon: (
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
    )
  }
];

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-8 rounded-3xl bg-qyuro-800 p-8 text-white shadow-soft">
      <div className="flex items-center gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-soft animate-float">
          <span className="h-4 w-4 rounded-md bg-white/90" />
        </div>
        <div>
          <p className="text-lg font-semibold">Qyuro</p>
          <p className="text-xs text-slate-300">Analytics Suite</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
              item.active
                ? "bg-white/10 text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
            href={item.href}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 transition group-hover:bg-white/10">
              <span className="h-5 w-5 text-white/80 transition group-hover:text-white">
                {item.icon}
              </span>
            </span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="rounded-2xl bg-white/10 p-4 text-sm shadow-soft">
        <p className="text-base font-semibold">Premium Insights</p>
        <p className="mt-2 text-xs text-slate-300">
          Unlock advanced reports and real-time forecasting.
        </p>
        <button className="mt-4 w-full rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white">
          Upgrade
        </button>
      </div>

      <div className="mt-auto flex items-center gap-3 rounded-2xl bg-white/10 p-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-qyuro-500 text-sm font-semibold">
          AC
        </div>
        <div>
          <p className="text-sm font-semibold">Ariana Cole</p>
          <p className="text-xs text-slate-300">Product Manager</p>
        </div>
      </div>
    </aside>
  );
}
