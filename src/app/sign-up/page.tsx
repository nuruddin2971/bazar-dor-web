import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-base sm:text-lg font-bold text-default-900 leading-tight">
        অ্যাকাউন্ট তৈরি করুন
      </h2>

      <p className="text-xs text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <form>
        <fieldset className="fieldset rounded-box w-md">
          <label className="">নাম</label>
          <input
            type="text"
            className="input w-md"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="">ইমেইল</label>
          <input
            type="email"
            className="input w-md"
            placeholder="you@example.com"
          />

          <label className="">পাসওয়ার্ড</label>
          <input
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <label className="">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
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
