"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { signInUser, signUpUser } from "@/lib/firebase/auth";

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
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    team: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      if (isSignup) {
        await signUpUser(formValues.email, formValues.password);
      } else {
        await signInUser(formValues.email, formValues.password);
      }
      router.push("/");
    } catch (error) {
      setErrorMessage(error?.message || "Authentication failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Alex Reed"
            className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      )}

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Work email
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </label>

      <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Password
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="********"
          required
          className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </label>

      {isSignup && (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Team name
          <input
            type="text"
            name="team"
            value={formValues.team}
            onChange={handleChange}
            placeholder="Qyuro Studio"
            className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      )}

      {errorMessage ? (
        <div
          role="alert"
          className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
        >
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Connecting..." : content.button}
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
