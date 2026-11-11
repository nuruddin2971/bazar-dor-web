import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon?: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: IMarket[];
}

const ProductDetailsPage = async ({
  params,
}: {
  params: { productDetailsId: string };
}) => {
  const { productDetailsId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productDetailsId}`,
    { cache: "no-store" },
  );

  const data = await res.json();
  const product: IProduct = data;

  console.log("product from category", product);
  if (!product || product?.error) {
    return (
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
  }

  const markets = product.markets;
  console.log("markets from category", markets);

  const minPrice = markets?.length
    ? Math.min(...markets.map((m) => m.min))
    : product.today;

  const maxPrice = markets?.length
    ? Math.max(...markets.map((m) => m.max))
    : product.today;

  const avgPrice = markets?.length
    ? Math.round(
        markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0) /
          markets.length,
      )
    : product.today;

  const priceDiff = Math.abs(product.today - product.yesterday);

  return (
    <div className="bg-[#f4f6f4] min-h-screen py-6 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <nav className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <span>হোম</span>

          <span>-</span>
          <span>{product.categoryNameBn}</span>
          <span>-</span>
          <span className="text-gray-800 font-medium">{product.nameBn}</span>
        </nav>

        <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f4f5f0] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
              {product.image}
            </div>
            <div className="space-y-1">
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                {product.nameBn}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                প্রতি {product.unit === "kg" ? "কেজি" : product.unit} ·
                {product.categoryNameBn}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 pt-1">
                গতকালের তুলনায় আজ দাম
                {product.change?.dir === "up" ? " বেড়েছে " : " কমেছে "}
                <span className="font-semibold text-gray-700">
                  {priceDiff} টাকা
                </span>
              </p>
            </div>
          </div>

          <div className="bg-[#f7f9f7] rounded-xl p-4 sm:p-5 text-center min-w-[160px] border border-gray-100 flex flex-col items-center justify-center self-stretch md:self-auto">
            <span className="text-xs text-gray-500 font-medium">আজকের দাম</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 my-1">
              {product.today}
            </div>
            <span className="text-xs text-gray-400 font-medium">
              টাকা / {product.unit === "kg" ? "কেজি" : product.unit}
            </span>
            {product.change && (
              <div
                className={`flex items-center gap-1 text-xs font-semibold mt-2 px-2.5 py-0.5 rounded-full ${
                  product.change.dir === "up"
                    ? "text-red-500 bg-red-50"
                    : "text-emerald-600 bg-emerald-50"
                }`}
              >
                <span>{product.change?.dir === "up" ? "▲" : "▼"}</span>
                <span>{product.change.pct} %</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
              <span className="text-xs text-gray-400 font-medium">
                সর্বনিম্ন দাম
              </span>
              <div className="text-2xl font-bold text-emerald-600">
                {minPrice} <span className="text-sm font-normal">টাকা</span>
              </div>
              <p className="text-xs text-gray-400 pt-2 border-t border-gray-50">
                সবচেয়ে কম দামের বাজার
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
              <span className="text-xs text-gray-400 font-medium">
                সর্বাধিক দাম
              </span>
              <div className="text-2xl font-bold text-red-500">
                {maxPrice} <span className="text-sm font-normal">টাকা</span>
              </div>
              <p className="text-xs text-gray-400 pt-2 border-t border-gray-50">
                সবচেয়ে বেশি দামের বাজার
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-1">
              <span className="text-xs text-gray-400 font-medium">গড় দাম</span>
              <div className="text-2xl font-bold text-emerald-600">
                {avgPrice} <span className="text-sm font-normal">টাকা</span>
              </div>
              <p className="text-xs text-gray-400 pt-2 border-t border-gray-50">
                প্রতি কেজি-এর হিসাব
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#f7f9f7] text-gray-500 font-medium border-b border-gray-100">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">বাজার</th>
                    <th className="py-3.5 px-4 sm:px-6">বিভাগ</th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">
                      সর্বনিম্ন
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">
                      সর্বাধিক
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">গড়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-gray-700 font-medium">
                  {markets?.map((item, idx) => {
                    const itemAvg = ((item.min + item.max) / 2).toFixed(2);
                    return (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50/60 transition-colors"
                      >
                        <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900">
                          {item.market}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-gray-500">
                          {item.division}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center">
                          {item.min} টাকা
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center">
                          {item.max} টাকা
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-right font-bold text-gray-900">
                          {itemAvg} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
