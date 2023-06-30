"use client";

import { X } from "phosphor-react";
import { useState } from "react";
import pb from "../lib/pocketbase";

export default function PostBtn() {
  const [postCont, setPostCont] = useState(false);
  const [postValue, setPostValue] = useState("");

  function handleInputChange(event: any) {
    setPostValue(event.target.value);
  }

  async function onSubmit() {
    const data = {
      username: "test",
      content: postValue,
    };

    const record = await pb.collection("posts").create(data);
  }

  return (
    <div className="relative">
      {" "}
      <button
        className="btn p-2 rounded-2xl mb-2"
        onClick={() => setPostCont(true)}
      >
        New Post
      </button>
      {postCont && (
        <div className="bg-slate-500 z-10 absolute p-4 rounded-3xl">
          <div className="flex justify-between">
            <h2>Add a post</h2>
            <button>
              <X size={15} onClick={() => setPostCont(false)} />
            </button>
          </div>
          <textarea
            rows={4}
            cols={20}
            className="text-black bg-slate-400 my-4 rounded-md resize-none"
            value={postValue}
            onChange={handleInputChange}
          />
          <button className="btn p-2 rounded-2xl" onClick={onSubmit}>
            submit
          </button>
        </div>
      )}
    </div>
  );
}
