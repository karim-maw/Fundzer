import { Key } from "react";
import PostBtn from "./components/PostBtn";
import LikeBtn from "./components/buttons/LikeBtn";

async function getData() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records?sort=-created",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

type PostType = {
  id: Key;
  content: string;
  username: string;
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <div className="flex flex-col max-w-xl gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl">Posts</h2>
          <PostBtn />
        </div>

        {data.items?.map((post: PostType) => (
          <div className="invoice p-5 rounded-3xl">
            <div className="flex justify-between">
              <p className="text-gray-300">{post.username}</p>
              <LikeBtn />
            </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
