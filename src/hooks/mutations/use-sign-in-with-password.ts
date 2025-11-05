import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword(callbacks?: {
  onError: (error: Error) => void;
}) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
