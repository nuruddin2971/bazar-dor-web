import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import TopFallers from "@/components/TopFallers";
import TopRisers from "@/components/TopRisers";
import Image from "next/image";

interface IProduct {
  id: string;
  image: string;
  nameBn: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();

  const topRisersProducts = data.filter(
    (product) => product.change?.dir === "up",
  );

  const topFallersProducts = data.filter(
    (product) => product.change?.dir === "down",
  );

  // const allProducts = data.map((product) => (
  //   <div key={product.id}>
  //     <AllProducts allProducts={allProducts}></AllProducts>
  //   </div>
  // ));

  // const allProducts = data.map((product) => (
  //   <div key={product.id}>
  //     <h2>{product.nameBn}</h2>
  //     <p>Price: {product.today} টাকা</p>
  //     <p>Unit: {product.unit}</p>
  //   </div>
  // ));

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-3">
          <Banner></Banner>
        </div>

        {/* Ajke dam darce */}
        <div className="col-span-3">
          <TopRisers topRisersProducts={topRisersProducts}></TopRisers>
          <TopFallers topFallersProducts={topFallersProducts}></TopFallers>
          <AllProducts></AllProducts>
        </div>
      </div>
    </div>
  );
}
