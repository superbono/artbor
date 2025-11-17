import { Link, Outlet } from "react-router";
import logo from "@/assets/logo_img.png";
import { SunIcon } from "lucide-react";
import defaultImg from "@/assets/default-avatar.jpg";

export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col bg-gray-200">
      <header className="m-auto h-15 w-full max-w-175 border-b-2">
        <div className="m-auto flex h-full w-full max-w-175 justify-between bg-white px-4">
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
      <main className="m-auto min-h-180 w-full max-w-175 flex-1 border-x-0 bg-white px-4 py-6">
        <Outlet />
      </main>
      <footer className="text-muted-foreground m-auto w-full max-w-175 border-t-2 bg-white py-3 text-center text-xs">
        @artbor
      </footer>
    </div>
  );
}
