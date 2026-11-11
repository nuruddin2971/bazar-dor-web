"use client";
import React, { useState } from "react";
import CategoryDropDownPage from "./CategoryDropDown";
import { IDropdown } from "@/app/category/[categoryId]/page";

interface SortedPagePrps {
  resData: IDropdown[];
  data: IDropdown[];
  categorySort?: IDropdown[];
  setCategorySort?: IDropdown[];
}

const SortedPage = ({ resData, data }: SortedPagePrps) => {
  const [categorySort, setCategorySort] = useState<IDropdown[]>(resData);

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f4f5f0] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
              {data[0]?.categoryIcon}
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-gray-900 text-xl sm:text-2xl tracking-tight">
                {data[0]?.categoryNameBn}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                {data.length} টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>

          <CategoryDropDownPage
            data={data}
            categorySort={categorySort}
            setCategorySort={setCategorySort}
          ></CategoryDropDownPage>
        </div>

        <div className="text-sm sm:text-base text-gray-500 mt-1">
          <p>মোট {resData.length}টি পণ্য দেখানো হচ্ছে</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {categorySort.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-gray-100/80 flex flex-col justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f4f5f0] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                  {product.image}
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl tracking-tight">
                    {product.nameBn}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 mt-1">
                    প্রতি {product.unit}
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between mt-6 pt-4">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">
                    আজকের দাম
                  </p>
                  <p className="text-xl font-extrabold text-gray-900 leading-none">
                    {product.today}
                    <span className="text-base sm:text-lg font-bold text-gray-800 ml-0.5">
                      টাকা
                    </span>
                  </p>
                </div>

                <div className="bg-[#f2f7f2] text-[#1A9951] px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shrink-0">
                  <span
                    className={
                      product.change.dir === "up"
                        ? "text-red-600 flex items-center gap-0.5 font-semibold"
                        : "text-green-600 flex items-center gap-0.5 font-semibold"
                    }
                  >
                    <span>
                      {product.change.dir === "flat"
                        ? "-00%"
                        : `${product.change.dir === "up" ? "▲" : "▼"} ${Math.abs(product.change.pct)}%`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortedPage;
