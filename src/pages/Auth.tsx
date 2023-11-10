import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [linkSent, setLinkSent] = useState(false);

  const handleLogin = async (event: any) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setErrMsg(error.message);
    } else {
      setLinkSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center xs:bg-light-grey">
      <div className=" w-[470px] bg-white p-10 rounded-lg">
        <div className="flex justify-center mb-10">
          <img src="src/assets/logo-devlinks-large.svg" />
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold mb-2">Login</h1>
          <div className="text-grey font-light mb-10">
            Login via magic link with your email below
          </div>
          {!linkSent ? (
            <form className="" onSubmit={handleLogin}>
              <div className="">
                <div className="">
                  <label className="block text-dark-grey">Email Address</label>
                  <input
                    className="w-full mt-1  border rounded-md p-2 border-borders text-grey"
                    type="email"
                    placeholder="eg: alex@email.com"
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {errMsg && (
                  <div className="text-red text-sm mt-2">
                    Something went wrong, please try again.
                  </div>
                )}

                <button
                  className="bg-purple text-white w-full rounded-md py-2 mt-10"
                  disabled={loading}
                >
                  {loading ? <span>Loading</span> : <span>Login</span>}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-green-500">
              Check your email for the login link!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
