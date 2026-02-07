"use client";
import { ProductsType } from "@/lib/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import DealsSkeleton from "./loadingSkeleton/dealsSkeleton";

export default function DealsOfTheDay() {
  const [deals, setDeals] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/products/productsData?category=Fruit",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const productDeals = await response.json();
        setDeals(productDeals.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getDeals();
  }, []);

  return (
    <section className="mt-12 mx-3">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl max:lg-text-2xl font-bold">Deals Of The Day</h3>
        <p className="text-sm cursor-pointer">All Deals →</p>
      </div>

      {loading ? (
        <div className="flex gap-6 overflow-auto pb-12">
        <DealsSkeleton/>
        <DealsSkeleton/>
        <DealsSkeleton/>
        <DealsSkeleton/>
        </div>
      ) : 
      deals.length > 0 ? (
        <div className="flex gap-6 overflow-auto pb-12 hide-scrollbar">
          {deals.map((deal, index) => (
            <div key={index} className="w-70 relative shrink-0">
              <Image
                src={deal.image}
                alt="best deal image"
                width={280}
                height={280}
                className="w-70 h-70 rounded-lg object-cover"
              />
              <div className="bg-white rounded-lg shadow-lg w-60 absolute -bottom-10 p-4 left-1/2 -translate-x-1/2">
                <p className="font-semibold mb-1">{deal.name}</p>
                <p className="text-p2-color text-xs mb-3">Rating: {deal.rating} / 5</p>
                <div className="flex justify-between items-center">
                  <p className="text-orange-500 font-bold text-lg">${deal.price}</p>
                  <Button variant="destructive" size="sm" className="gap-1">
                    <ShoppingCart size={14} />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>no products</p>
      )}
    </section>
  );
}