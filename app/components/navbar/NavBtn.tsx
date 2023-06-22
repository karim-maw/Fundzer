import pb from "@/app/lib/pocketbase";
import Link from "next/link";
import React from "react";

export default function NavBtn() {
  return (
    <div>
      {pb.authStore.isValid ? (
        <button>Log out</button>
      ) : (
        <Link href="/login" className="btn py-2 px-3 rounded-xl">
          Login
        </Link>
      )}
    </div>
  );
}
