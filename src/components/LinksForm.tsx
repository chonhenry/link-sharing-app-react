import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";

export default function LinksForm() {
  const [newUsername, setNewUsername] = useState<string>("");

  return (
    <div className="bg-white rounded-xl w-full md:w-4/6 p-5">
      Customize your links
      <hr />
      <hr />
      <Counter />
    </div>
  );
}
