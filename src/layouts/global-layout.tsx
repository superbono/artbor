import { Link, Outlet } from "react-router";
import logo from "@/assets/logo_img.png";
import { SunIcon } from "lucide-react";
import defaultImg from "@/assets/default-avatar.jpg";

export default function GlobalLayout() {
  return (
    <div>
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="h-5" alt="로고이미지" />
            <div className="font-bold">LOGO</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </div>
            <img src={defaultImg} className="h-6" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
