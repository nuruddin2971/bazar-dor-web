import Link from "next/link";
import React from "react";

interface IDropdown {
  id: string;
  categoryIcon: string;
  categoryNameBn: string;
  unit: string;
  image: string;
  nameBn: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const resData: IDropdown[] = await res.json();
  const data = resData.filter((item) => item.change.dir !== "flat");

  return data && data.length > 0 ? (
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

          <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-sm sm:text-base text-gray-600 font-medium">
              সাজান
            </span>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm sm:btn-md bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-normal rounded-xl px-4 m-0"
            >
              ডিফল্ট
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border border-gray-100"
            >
              <li>
                <a>দাম: কম থেকে বেশি</a>
              </li>
              <li>
                <a>দাম: বেশি থেকে কম</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-500 mt-1">
          <p>মোট {resData.length}টি পণ্য দেখানো হচ্ছে</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {resData.map((product) => (
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
  ) : (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page is invalid!</p>
      <Link href={"/"}>
        <button className="btn btn-active btn-success btn-sm sm:btn-md flex-1 sm:flex-none">
          হোম পেজে ফিরে যান
        </button>
      </Link>
    </div>
  );
};

export default CategoryPage;
