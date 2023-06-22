"use client";
import pb from "@/app/lib/pocketbase";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


export default function page() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  async function login(data: any) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.username, data.password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pb.authStore.isValid ? router.push("/") : "";
  }, []);

  return (
    <div className="p-2 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center border-2 p-5 rounded-xl">
        <h1 className="text-2xl">Login to your account</h1>
        <form
          className="flex flex-col gap-3 w-72"
          onSubmit={handleSubmit(login)}
        >
          <input
            type="text"
            placeholder="username"
            className="bg-zinc-700 rounded-xl p-3"
            {...register("username")}
          />
          <input
            type="password"
            placeholder="password"
            className="bg-zinc-700 rounded-xl p-3"
            {...register("password")}
          />

          <button
            type="submit"
            className="bg-zinc-800 p-3 rounded-xl hover:bg-zinc-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
