"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f4] flex flex-col items-center justify-start p-4 sm:p-8">
      {/* Page Title & Subtitle */}
      <div className="text-center mb-6 w-full max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          আমার প্রোফাইল
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-xl flex flex-col gap-4">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href={"/profile"}>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12 sm:w-14 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">Profile</span>
                </div>
              </div>
            </Link>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {user?.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Edit Section Card */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              তথ্য
            </h3>
            <button
              onClick={handleShowForm}
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 cursor-pointer text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
            >
              Edit Profile
            </button>
          </div>

          {show && (
            <form
              onSubmit={handleUpdateProfile}
              className="flex flex-col gap-4 pt-2 border-t border-gray-100"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-800">নাম</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-gray-400"
                  placeholder="যেমন: রহিম উদ্দিন"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#008744] hover:bg-[#00733a] cursor-pointer text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm transition-colors duration-150"
              >
                আপডেট
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
