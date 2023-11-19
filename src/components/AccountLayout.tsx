import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import PhonePreview from "../components/PhonePreview";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";

interface AuthProps {
  session: Session | null;
}

export default function AccountLayout({ session }: AuthProps) {
  if (session === null) {
    return <Navigate to="/" />;
  }

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [avatar_url, setAvatarUrl] = useState<string>("");

  return (
    <div className="bg-light-grey max-w-[1920px] h-screen m-auto p-5 flex flex-col">
      <Navbar />
      <div className="grow flex">
        <PhonePreview />
        <Outlet />
      </div>
    </div>
  );
}
