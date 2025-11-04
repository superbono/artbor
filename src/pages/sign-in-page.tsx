import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import { useState, type SetStateAction } from "react";
import { Link } from "react-router";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signInWithPassword } = useSignInWithPassword();

  const handleOnChangeEmail = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSignInWithPassword = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;
    signInWithPassword({ email, password });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          className="py-6"
          type="email"
          placeholder="exam@exam.com"
          value={email}
          onChange={handleOnChangeEmail}
        />
        <Input
          className="py-6"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleOnChangePassword}
        />
      </div>
      <div>
        <Button className="w-full py-4" onClick={handleSignInWithPassword}>
          로그인
        </Button>
      </div>
      <div>
        <Link to={"/sign-up"} className="text-muted-foreground hover:underline">
          계정이 없으시다면 ? 회원가입
        </Link>
      </div>
    </div>
  );
}
