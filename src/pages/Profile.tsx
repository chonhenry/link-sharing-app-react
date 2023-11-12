import { Session } from "@supabase/supabase-js";
import { Navigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

interface AuthProps {
  session: Session | null;
}

export default function Profile({ session }: AuthProps) {
  if (session === null) {
    return <Navigate to="/" />;
  }

  const { user } = session;
  return (
    <div className="bg-red w-screen h-screen p-5">
      <Navbar />
      Profile
      <br />
      <Link to="/">homepage</Link>
    </div>
  );
}
