import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");

  const handleUpdatePasswordClick = () => {
    if (password.trim() === "") return;
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">비밀번호 재설정</div>
        <div className="text-muted-foreground">
          새로운 비밀번호를 입력하세요.
        </div>
      </div>
      <div className="flex flex-col">
        <Input
          className="py-6"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="w-full"
          // onClick={}
          // disabled={}
        >
          비밀번호 변경하기
        </Button>
      </div>
    </div>
  );
}
