import React from "react";

const CategoryPage = async ({ params }) => {
  const { categoryId } = await params;
  // console.log(categoryId);

  // https://openapi.programming-hero.com/api/bazardor/products?category=chal

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  // console.log("data from the category", data);
  // const categoryPage = data;
  // console.log(categoryPage);

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex gap-2">
            <span>{data[0]?.categoryIcon}</span>
            <h2>{data[0]?.categoryNameBn}</h2>
          </div>
          <p>{data.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {data.map((product) => (
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

export default CategoryPage;
