import Link from "next/link";
import React from "react";

interface INavs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  const data: INavs[] = await res.json();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-hidden">
      <div className="flex items-center gap-5 sm:gap-8 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {data.map((product) => (
          <Link
            key={product.id}
            href={`/category/${product.slug}`}
            className="flex shrink-0 items-center gap-2 text-sm sm:text-base text-default-700 hover:text-[#05893E] font-medium transition-colors"
          >
            <span>{product.icon}</span>
            <span>{product.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
