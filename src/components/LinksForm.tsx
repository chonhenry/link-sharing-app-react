import { useState } from "react";
import { login, logout, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function LinksForm() {
  const [newUsername, setNewUsername] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.value.username);

  return (
    <div className="bg-white rounded-xl w-full md:w-4/6 p-5">
      Customize your links
      <hr />
      <br />
      <input
        className="border"
        placeholder="username"
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <div>{username}</div>
      <br />
      <button
        className="border p-1 mr-2"
        onClick={() => dispatch(login({ username: newUsername }))}
      >
        login
      </button>
      <button className="border p-1" onClick={() => dispatch(logout())}>
        logout
      </button>
    </div>
  );
}
