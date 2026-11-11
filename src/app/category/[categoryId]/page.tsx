import SortedPage from "@/components/Sorted";
import Link from "next/link";

export interface IDropdown {
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
    { cache: "no-store" },
  );
  const resData: IDropdown[] = await res.json();
  const data = resData.filter((item) => item.change.dir !== "flat");

  return data && data.length > 0 ? (
    <SortedPage resData={resData} data={data}></SortedPage>
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
