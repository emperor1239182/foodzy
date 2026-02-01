"use client"
import { LucideChevronLeft, LucideChevronRight} from "lucide-react";
import { useEffect, useState } from "react";
import { ProductsType } from "@/lib/types";
import Image from "next/image";
export default function SpecialDishes() {
    const [dishes, setDishes] = useState<ProductsType[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getDishes = async () =>{
            setLoading(true);
            try{
                const response = await fetch('http://localhost:3000/api/products/productsData?category=Food');

                if(!response.ok){
                    throw new Error("Couldnt fetch products");
                }

              const items = await response.json()
              setDishes(items.data)
              setLoading(false)

            } catch(error){
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        getDishes()
    }, [])

    return (
        <section className="mt-10">
        <h3 className="text-p1-color text-[10px] uppercase font-bold">Special Dishes</h3> <br/>
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl lg:text-3xl leading-5 sm:leading-7">Standout Dishes <br/> From Our Menu</h1>
        <div className="flex gap-3 items-center">
            <div className="rounded-full border-0 bg-p2-color p-2"><LucideChevronLeft size={20} /></div>
            <div className="rounded-full border-0 bg-p2-color p-2"><LucideChevronRight size={20}/></div>
        </div>
        </div>

        {/*display fetched dishes*/}
        
        {loading && (
            <p>Loading...</p>
        )}
            {dishes && dishes.length > 0 && (
                <div className="flex gap-3">
                    {dishes.map((dish, index)=>(
                        <div key={index} className="flex flex-col gap-2">
                            <div className="flex justify-center items-center">
                                <Image src={dish.image} width={100} height={100} alt="Standout Dishes"/>
                            </div>
                            <p>{dish.name}</p>
                            <p>{dish.category}</p>
                        </div>
                    ))}
                </div>
            )}
            {!loading && dishes.length === 0 && <p>No dishes found</p>}
      
        </section>
    );
}
