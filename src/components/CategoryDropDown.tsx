import React from "react";

const CategoryDropDownPage = () => {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-3">
      <label
        htmlFor="sort-select"
        className="text-xs sm:text-sm text-[#6B726A] font-normal whitespace-nowrap"
      >
        সাজান
      </label>

      <select
        id="sort-select"
        defaultValue="default"
        className="select select-sm h-8 min-h-8 sm:h-9 sm:min-h-9 w-44 sm:w-auto bg-white border border-[#DCDED9] rounded-lg text-xs sm:text-sm font-medium text-[#222522] focus:outline-none focus:border-gray-400 cursor-pointer"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-asc">দাম: কম থেকে বেশি</option>
        <option value="price-desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default CategoryDropDownPage;
