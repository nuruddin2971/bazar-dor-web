import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import TopFallers from "@/components/TopFallers";
import TopRisers from "@/components/TopRisers";

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
