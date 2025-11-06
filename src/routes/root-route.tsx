import GlobalLayout from "@/layouts/global-layout";
import GuestOnlyLayout from "@/layouts/guest-only-layout";
import MemberOnlyLayout from "@/layouts/member-only-layout";
import { IndexPage } from "@/pages/index-page";
import { PostDetailPage } from "@/pages/post/post-detail-page";
import { ForgetPasswordPage } from "@/pages/profile/forget-password-page";
import { ProfileUpdatePage } from "@/pages/profile/profile-update-page";
import { ResetPasswordPage } from "@/pages/profile/reset-password-page";
import { SignInPage } from "@/pages/sign-in-page";
import { SignUpPage } from "@/pages/sign-up-page";
import { Navigate, Route, Routes } from "react-router";

export default function RootRoute() {
  return (
    <Routes>
      {/* 공통 레이아웃을 적용시킬 부분 */}
      <Route element={<GlobalLayout />}>
        {/* 정확한 라우팅 경로가 아닐 때 */}
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />

        {/* 인증이 되지 않은 사용자 접근 */}
        <Route element={<GuestOnlyLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Route>

        {/* 인증이 된 사용자 접근 */}
        <Route element={<MemberOnlyLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/profile/:userId" element={<ProfileUpdatePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
