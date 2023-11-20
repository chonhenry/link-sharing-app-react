import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";
import { Session } from "@supabase/supabase-js";
import Auth from "./pages/Auth";
import Links from "./pages/Links";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import LinksForm from "./components/LinksForm";
import AccountLayout from "./components/AccountLayout";
import { Provider } from "react-redux";

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Auth session={session} />} />

          <Route path="/account" element={<AccountLayout session={session} />}>
            <Route path="links" element={<LinksForm />} />
            <Route path="profile" element={<Profile session={session} />} />
          </Route>

          <Route path="*" element={<div>not found</div>} />
        </Routes>
      )}
    </div>
  );

  // return (
  //   <div className="">
  //     {!session ? (
  //       <Auth />
  //     ) : (
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={<Account key={session.user.id} session={session} />}
  //         />
  //         <Route path="/:username" element={<Profile session={session} />} />
  //       </Routes>
  //     )}
  //   </div>
  // );
}

export default App;
