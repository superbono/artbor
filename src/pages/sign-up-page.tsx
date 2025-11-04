import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/mutations/use-sign-up";
import { useState, type SetStateAction } from "react";
import { Link } from "react-router";

export function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signUp } = useSignUp();

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

  const handleSignUpSubmit = () => {
    // alert("회원가입");
    if (email.trim() === "") return;
    if (password.trim() === "") return;
    signUp({
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">회원가입</div>
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
        <Button className="w-full py-4" onClick={handleSignUpSubmit}>
          회원가입
        </Button>
      </div>
      <div>
        <Link to={"/sign-in"} className="text-muted-foreground hover:underline">
          이미 계정이 있다면 ? 로그인
        </Link>
      </div>
    </div>
  );
}
