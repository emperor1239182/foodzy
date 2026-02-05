import Nav from "./components/nav";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Recommended from "./components/recommended";
import DailySells from "./components/dailySells";
import SpecialDishes from "./components/specialDishes";
import DealsOfTheDay from "./components/dealsOfTheDay";

export default function Page() {
  return (
    <>
      <header>
        <Nav />

        <div className="hero bg-(image:--hero-background) bg-cover bg-center bg-no-repeat">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:flex">
            <div className="flex flex-col gap-1">
              <p className="text-[15px] tracking-wide font-semibold text-[#666664]">
                Super Delicious
              </p>
              <h4 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
                THE BEST WAY TO <br /> STUFF YOUR WALLET.
              </h4>
              <p className="max-w-md text-[12px] text-[#666664] font-semibold">
                Today&apos;s Best Deal
              </p>

              <Button
                variant="outline"
                size="sm"
                className="bg-order-button rounded-2xl max-w-30"
              >
                <ArrowRightCircle className="bg-white text-order-button rounded-full border-0 text-4xl" />{" "}
                <span className="text-sm">ORDER NOW</span>
              </Button>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <Image
                src="/assets/spag.png"
                width={500}
                height={500}
                alt="hero image"
                className="max-w-full md:w-120 xl:w-180 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <section className="sm:mx-20 xl:mx-60 ">
          <Recommended />
          <DailySells />
          <SpecialDishes/>
          <DealsOfTheDay/>
        </section>
      </header>
    </>
  );
}
