import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({}) => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="bg-default-50 border border-gray-300 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-6 lg:gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <div className="inline-block bg-[#E8F5E9] text-[#05893E] font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-4">
              {date}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-default-900 mb-3 leading-snug">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="text-sm sm:text-base text-default-600 mb-6 leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link href={"/#all-products"}>
              <button className="btn btn-active btn-success btn-sm sm:btn-md flex-1 sm:flex-none">
                সব পণ্য দেখুন
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center flex-shrink-0">
            <Image
              src={"/bazar-hero.png"}
              alt="banner-logo"
              height={300}
              width={300}
              className="w-full max-w-[200px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[380px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
