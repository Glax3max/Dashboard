import AuthForm from "@/components/auth/AuthForm";
import AuthShell from "@/components/auth/AuthShell";

export default function SignupPage() {
  return (
    <AuthShell
      heading="Create a new Qyuro workspace"
      description="Invite your team, upload assets, and start querying instantly."
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
