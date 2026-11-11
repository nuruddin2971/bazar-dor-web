"use client";
import { IDropdown } from "@/app/category/[categoryId]/page";
import React, { useEffect, useState } from "react";

interface CategoryDropDownProps {
  data: IDropdown[];
  categorySort?: IDropdown[];
  setCategorySort: React.Dispatch<React.SetStateAction<IDropdown[]>>;
}

const CategoryDropDownPage = ({
  data,
  
  setCategorySort,
}: CategoryDropDownProps) => {
  const [sortBy, setSortBy] = useState<string>("default");
  // console.log(sortBy, "sortBy");

  useEffect(() => {
    const sortedData = [...data];
    if (sortBy === "price-asc") {
      sortedData.sort((a, b) => Number(a.today) - Number(b.today));
    } else if (sortBy === "price-desc") {
      sortedData.sort((a, b) => Number(b.today) - Number(a.today));
    }
    setCategorySort(sortedData);
  }, [sortBy, data, setCategorySort]);

  // console.log(sortedData, "asdg");

  return (
    <div>
      <div className="px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
            <span>সাজান:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs sm:text-sm font-medium text-slate-800 border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropDownPage;
