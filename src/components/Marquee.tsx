import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IMarq {
  id: string;
  title: string;
  image: string;
  nameBn: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IMarq[] = await res.json();

  return (
    <div className="w-full bg-white border-b border-gray-300 py-3 overflow-hidden">
      <div>
        <MarqueeText direction="right" duration={15}>
          <div className="flex items-center gap-6 sm:gap-10">
            {data.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-2 whitespace-nowrap text-default-800 text-sm sm:text-base font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <span>{product.image}</span>
                  <span>{product.nameBn}</span>
                </div>

                <span className="text-default-600">
                  {product.today} টাকা/{product.unit}
                </span>

                <span
                  className={
                    product.change.dir === "up"
                      ? "text-red-600 flex items-center gap-0.5 font-semibold"
                      : "text-green-600 flex items-center gap-0.5 font-semibold"
                  }
                >
                  <span>{product.change.dir === "up" ? "▲" : "▼"}</span>
                  <span>{Math.abs(product.change.pct)}%</span>
                </span>
              </div>
            ))}
          </div>
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
