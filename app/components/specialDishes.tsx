"use client";
import { LucideChevronLeft, LucideChevronRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductsType } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SpecialDishesSkeleton from "./loadingSkeleton/specialDishesSkeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SpecialDishes() {
  const [dishes, setDishes] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [arrow, setArrow] = useState<"left" | "right">();

  useEffect(() => {
    const getDishes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "/api/products/productsData?category=Food"
        );

        if (!response.ok) {
          throw new Error("Couldnt fetch products");
        }

        const items = await response.json();
        setDishes(items.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getDishes();
  }, []);

  return (
    <section className="mt-30 mx-3">
      <h3 className="text-p1-color text-[10px] uppercase font-bold">
        Special Dishes
      </h3>
      <br />
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl lg:text-3xl leading-5 sm:leading-7">
          Standout Dishes <br /> From Our Menu
        </h1>
        <div className="flex gap-3 items-center">
          <div
            className={cn("rounded-full border-0 bg-p2-color p-1 sm:p-2", arrow === "left" && "bg-p1-color text-white")}
            onClick={() => setArrow("left")}
          >
            <LucideChevronLeft size={15} />
          </div>
          <div
            className={cn("rounded-full border-0 bg-p2-color p-1 sm:p-2", arrow === "right" && "bg-p1-color text-white")}
            onClick={() => setArrow("right")}
          >
            <LucideChevronRight size={15} />
          </div>
        </div>
      </div>
      {/*display fetched dishes*/}
      {loading ? (
        <div className="flex gap-3 overflow-auto mt-4">
          <SpecialDishesSkeleton />
          <SpecialDishesSkeleton />
          <SpecialDishesSkeleton />
          <SpecialDishesSkeleton />
        </div>
      ) : dishes.length > 0 ? (
        <div className="flex gap-3 overflow-auto mt-4 items-start hide-scrollbar">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center border-0 p-2 rounded-sm shadow-lg relative"
            >
              <div className="flex justify-center items-center w-40 h-40 p-2 rounded">
                <Image
                  src={dish.image}
                  width={80}
                  height={80}
                  alt="Standout Dishes"
                  className="w-20 h-20 rounded-4xl object-contain"
                />
              </div>
              <p className="font-bold text-[12px]">{dish.name}</p>
              <p className="text-p2-color text-sm">{dish.category}</p>
              <Button
                variant="destructive"
                className="rounded-bl-4xl flex items-center justify-center p-1 absolute top-1 right-0 w-8 h-8"
              >
                <Heart />
              </Button>
              <Accordion type="single" collapsible className="max-w-lg">
                <AccordionItem key={dish.name} value={dish.name}>
                  <AccordionTrigger>View full details</AccordionTrigger>
                  <AccordionContent className="text-[13px] font-semibold">
                    {dish.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        <p>No dishes found</p>
      )}
    </section>
  );
}
