"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successfull!");
      console.log(data);
    }

    if (error) {
      toast.error("Something went error!");
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // console.log(data, "from sign in");
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-base sm:text-lg font-bold text-default-900 leading-tight">
        সাইন ইন
      </h2>

      <p className="text-xs text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="you@example.com"
          />

          <label className="">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <button type="submit" className="btn btn-active btn-success mt-4">
            সাইন ইন
          </button>
        </fieldset>
      </form>
      <div className="flex gap-25 py-4">
        <button onClick={handleGoogleSignIn} className="btn">
          Sign In With Google
        </button>
        <button onClick={handleGithubSignIn} className="btn">
          Sign In With Github
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
