import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-default-200 bg-default-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <div className="shrink-0">
              <Image
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#05893E] rounded-xl object-contain p-1.5"
                src={"/logo-icon.png"}
                alt="nav-logo"
                height={50}
                width={50}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-default-900 leading-tight">
                বাজার দর
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-default-500">
                {date}
              </p>
            </div>
          </div>

        
          <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
            <button className="btn btn-active btn-success btn-sm sm:btn-md flex-1 sm:flex-none">
              সাইন ইন
            </button>

            <button className="btn btn-active btn-success btn-sm sm:btn-md flex-1 sm:flex-none">
              সাইন আপ
            </button>
          </div>
        </div>

        <NavLinks />
      </header>
    </div>
  );
};

export default Header;
