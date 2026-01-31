"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductsType } from "@/lib/types";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DailySells() {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    async function getNew() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/products/productsData",
        );

        if (!response.ok) {
          throw new Error("failed to fetch products");
        }

        const items = await response.json();
        setProducts(items.data);
      } catch (error) {
        console.error(error);
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

      {/*fetch the best sales product from the api*/}

      {products && products.length > 0 && (
        <div>
          {products.map((item: ProductsType, index: number) => (
            <div key={index}>
              <Image
                src={item.image}
                alt="new products"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
