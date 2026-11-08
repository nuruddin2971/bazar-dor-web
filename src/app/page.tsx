import Banner from "@/components/Banner";
import TopFallers from "@/components/TopFallers";
import TopRisers from "@/components/TopRisers";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
 
  const topRisersProducts = data.filter(
    (product) => product.change?.dir === "up",
  );


  const topFallersProducts = data.filter(
    (product) => product.change?.dir === "down",
  );
  

  return (
    <div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        <div className="col-span-3">
          <Banner></Banner>
        </div>

        {/* Ajke dam darce */}
        <div className="col-span-3">
          <TopRisers topRisersProducts={topRisersProducts}></TopRisers>
          <TopFallers topFallersProducts={topFallersProducts}></TopFallers>
        </div>
      </div>
    </div>
  );
}
