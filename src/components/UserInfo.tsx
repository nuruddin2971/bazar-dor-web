"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("Failed to Sign Out!");
    } else {
      toast.success("Successfully Sign Out!");
    }
  };

  return (
    <div className="w-full sm:w-auto">
      {user ? (
        <div className="flex items-center justify-end gap-3">
          <div className="flex items-center justify-end gap-3">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xs">UI</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col min-w-0">
            <p className="text-sm font-semibold text-default-900 truncate max-w-36">
              {user.name}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-success btn-sm sm:btn-md flex-1 sm:flex-none px-4"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link href={"/sign-in"}>
            <button className="btn btn-outline btn-success btn-sm sm:btn-md flex-1 sm:flex-none px-4">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="btn btn-outline btn-success btn-sm sm:btn-md flex-1 sm:flex-none px-4">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
