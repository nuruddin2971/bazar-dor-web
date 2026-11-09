"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
    // const router = useRouter()


  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    // console.log("data from sign up", user);

    const { data, error } = await authClient.signUp.email({
      ...user,
    //   callbackURL: "/",
    });

    if (data) {
      toast.success("Sign Up successfull!");
      console.log(data);
      redirect("/sign-in");
    }

    if (error) {
      toast.error("Something went error!");
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-base sm:text-lg font-bold text-default-900 leading-tight">
        অ্যাকাউন্ট তৈরি করুন
      </h2>

      <p className="text-xs text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="যেমন: রহিম উদ্দিন"
          />

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

          <label className="">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="আবার লিখুন"
          />

          <button className="btn btn-active btn-success mt-4">
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
