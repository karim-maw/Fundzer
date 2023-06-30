import pb from "@/app/lib/pocketbase";
import Link from "next/link";
import React from "react";
import LogOutBtn from "./LogOutBtn";

export default function NavBtn() {
  return (
    <div>
      {pb.authStore.isValid ? (
        <LogOutBtn />
      ) : (
        <Link href="/login" className="btn py-2 px-3 rounded-xl">
          Login
        </Link>
      )}
    </div>
  );
}
