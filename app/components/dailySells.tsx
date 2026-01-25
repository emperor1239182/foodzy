import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function DailySells() {
  return (
    <section className="mt-8 ">
      <div className="hidden sm:flex justify-between items-center mb-4">
        <h2 className="font-bold text-[12px] lg:text-lg text-p2-color">
          Daily Best Sells
        </h2>
        <div className="flex items-center font-semibold gap-2 text-[12px] lg:text-[14px]">
          <p>Featured</p>
          <p>Popular</p>
          <p>New added</p>
        </div>
      </div>

      <div>
        <div className="bg-(image:--daily-hero) bg-cover bg-no-repeat max-h-65 flex flex-col gap-14 pt-6 pb-15 px-4 sm:rounded w-full sm:w-38">
          <p className="text-white font-bold leading-tight text-4xl sm:text-xl ">
            Bring nature <br />
            into your <br /> home
          </p>
          <Button
            variant="destructive"
            size="sm"
            className=" w-60 mx-auto sm:mx-0 sm:w-22 text-[10px]"
          >
            Shop Now
            <ArrowRight />
          </Button>
        </div>

      </div>

      {/*mobile best sales*/}
      <div className="flex justify-between items-center my-6 mx-3 sm:hidden ">
        <h2 className="font-bold text-[12px] lg:text-lg text-p2-color">
          Daily Best Sells
        </h2>
        <div className="flex items-center font-semibold gap-2 text-[12px] lg:text-[14px]">
          <p>Featured</p>
          <p>Popular</p>
          <p>New added</p>
        </div>
      </div>

    </section>
  );
}
