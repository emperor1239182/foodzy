"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductsType } from "@/lib/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Gudea } from "next/font/google";
import DailySellsSkeleton from "./loadingSkeleton/dailySellsSkeleton";

const gudea = Gudea({
  weight: ["700"],
  subsets: ["latin"],
});




export default function DailySells() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getNew() {
      try {
        setIsLoading(true)
        const response = await fetch(
          "http://localhost:3000/api/products/productsData?type=recent"
        );

        if (!response.ok) {
          throw new Error("failed to fetch products");
        }

        const items = await response.json();
        setProducts(items.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally{
        setIsLoading(false);
      }
    }

    getNew();
  }, []);

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

      <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
        <div className="bg-(image:--daily-hero) bg-cover bg-no-repeat max-h-65 flex flex-col gap-14 pt-6 pb-15 px-4 sm:rounded w-full sm:max-w-40">
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

        

        {/*mobile best sales*/}
      <div className="flex justify-between sm:hidden mx-3">
        <h2 className="font-bold text-[12px] lg:text-lg text-p2-color">
          Daily Best Sells
        </h2>
        <div className="flex items-center font-semibold gap-2 text-[12px] lg:text-[14px]">
          <p>Featured</p>
          <p>Popular</p>
          <p>New added</p>
        </div>
      </div>

      {/*fetch the best sales product from the api*/}
      {isLoading ? (
        <div className="flex gap-6 overflow-auto mx-3">
        <DailySellsSkeleton/>
        <DailySellsSkeleton/>
        <DailySellsSkeleton/>
        <DailySellsSkeleton/>
        </div>
      ) :  
      products.length > 0 ? (
        <div className="flex gap-6 overflow-auto mx-3">
          {products.map((item: ProductsType, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-1 border border-gray-300 p-2 w-40 rounded "
            >
              <div className="h-25 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt="new products"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col grow gap-1 p-2 w-40">
                <p className="text-p2-color text-[14px] font-semibold line-clamp-1">
                  {item.category}
                </p>
                <p
                  className={`${gudea.className} font-bold text-[13px] line-clamp-2`}
                >
                  {item.name}
                </p>
                <p className="text-sm text-p2-color font-bold">
                  Rating: {item.rating} / 5
                </p>
                <p className="text-p3-color font-bold text-[14px]">
                  ${item.price}
                </p>
                <p className="text-[12px] text-p2-color">
                  Sold: {item.stock}/{item.sold}
                </p>
              </div>

              <Button variant={"destructive"} className="mt-auto h-7">
                Add To Cart
              </Button>
            </div>
            
          ))}
        </div>
      ) : <p>No Products Found</p>
    }
  
      </div>

      
      
    </section>
  );
}
