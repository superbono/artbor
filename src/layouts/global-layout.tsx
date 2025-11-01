import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <div>
      <header>헤더</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
