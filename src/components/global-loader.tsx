import loadingLogo from "@/assets/logo_img.png";

export function GlobalLoader() {
  return (
    <div className="bg-muted flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce flex-col items-center gap-1">
        <img src={loadingLogo} alt="로고이미지" className="h-10 w-10" />
        <div className="text-2xl font-bold">Artbor</div>
      </div>
    </div>
  );
}
