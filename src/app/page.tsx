import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        <div className="col-span-3">
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
}
