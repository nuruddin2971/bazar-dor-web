import React from "react";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-base sm:text-lg font-bold text-default-900 leading-tight">
        সাইন ইন
      </h2>

      <p className="text-xs text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <form>
        <fieldset className="fieldset rounded-box w-md">
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

          <button className="btn btn-active btn-success mt-4">সাইন ইন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
