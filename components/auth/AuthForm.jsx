const copy = {
  login: {
    title: "Welcome back",
    subtitle: "Sign in to continue your AI workspace.",
    button: "Sign in",
    footerText: "New to Qyuro?",
    footerLink: "/signup",
    footerLinkLabel: "Create account"
  },
  signup: {
    title: "Create your account",
    subtitle: "Start building your AI knowledge hub.",
    button: "Create account",
    footerText: "Already have an account?",
    footerLink: "/login",
    footerLinkLabel: "Sign in"
  }
};

export default function AuthForm({ mode }) {
  const content = copy[mode] || copy.login;
  const isSignup = mode === "signup";

  return (
    <form className="flex flex-col gap-5">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {mode === "signup" ? "Get started" : "Account access"}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-white">
          {content.title}
        </h2>
        <p className="mt-2 text-sm text-slate-400">{content.subtitle}</p>
      </div>

      {isSignup && (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Full name
          <input
            type="text"
            placeholder="Alex Reed"
            className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      )}

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Work email
        <input
          type="email"
          placeholder="you@company.com"
          className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </label>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Password
        <input
          type="password"
          placeholder="••••••••"
          className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </label>

      {isSignup && (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Team name
          <input
            type="text"
            placeholder="Qyuro Studio"
            className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      )}

      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
      >
        {content.button}
      </button>

      <p className="text-center text-sm text-slate-400">
        {content.footerText}{" "}
        <a
          href={content.footerLink}
          className="font-semibold text-violet-400 transition hover:text-violet-300"
        >
          {content.footerLinkLabel}
        </a>
      </p>
    </form>
  );
}
