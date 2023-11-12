import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import { Link, Navigate } from "react-router-dom";

interface AuthProps {
  session: Session | null;
}

export default function Account({ session }: AuthProps) {
  if (session === null) {
    return <Navigate to="/" />;
  }
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [avatar_url, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const { user } = session!;

      const { data, error } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);

  async function updateProfile(event: any, avatar_url: string = "") {
    event.preventDefault();

    setLoading(true);
    const { user } = session!;

    const updates = {
      id: user.id,
      username,
      website,
      avatar_url,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatarUrl(avatar_url);
    }
    setLoading(false);
  }

  return (
    <div className="bg-red w-screen h-screen p-5">
      <Navbar />
      <form
        onSubmit={(e) => updateProfile(e, avatar_url)}
        className="form-widget"
      >
        <Avatar
          url={avatar_url}
          size={150}
          onUpload={(event, url) => {
            updateProfile(event, url);
          }}
        />
        <Link to="/profile">Profile</Link>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            required
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button
            className="button block primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <button
            className="button block"
            type="button"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </form>
    </div>
  );
}

/*
Github
X/Twitter
Linkedin
Youtube
Facebook
Instagram
Twitch
Website
*/
