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
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
      <Route path="/profile/:userId" element={<ProfileUpdatePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
}
