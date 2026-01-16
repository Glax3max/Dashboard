import AuthForm from "@/components/auth/AuthForm";
import AuthShell from "@/components/auth/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in to your AI workspace"
      description="Pick up where you left off with collections, prompts, and research."
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
