import RootRoute from "@/routes/root-route";
import supabase from "./lib/supabase";
import { useEffect } from "react";
import { useIsSessionLoaded, useSetSession } from "./store/session";

export default function App() {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <div>Loading...</div>;

  return <RootRoute />;
}
