import Link from "next/link";
import React from "react";
import NavBtn from "./NavBtn";

export default function Navbar() {
  return (
    <div className="invoice flex items-center justify-around py-7 px-5 rounded-3xl my-5 mx-20">
      <h1 className="text-2xl">Logo</h1>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/funding">Funding</Link>
        <Link href="/info">Info</Link>
      </div>
      <NavBtn />
    </div>
  );
}
