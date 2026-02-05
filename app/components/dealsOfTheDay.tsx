"use client"
import { ProductsType } from "@/lib/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function DealsOfTheDay() {
    const[deals, setDeals] = useState<ProductsType[]>([])
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        const getDeals = async () => {
            try{
                setLoading(true);

                const response = await fetch('http://localhost:3000/api/products/productsData?category=Snack')

                if(!response.ok){
                    throw new Error("Failed to fetch products")
                }
                const productDeals = await response.json();

                setDeals(productDeals);

                setLoading(false);
            } catch(error){
                console.error(error)
            } finally{
                setLoading(false)
            }
        }
        getDeals();
    }, [])

    return (
        <section>
            <div className="flex justify-between">
            <h3>Deals Of The Day</h3>
            <p>View all deals</p>
            </div>

                {deals.length > 0 ? (
                    <div>
                        {deals.map((deal, index)=>(
                            <div key={index}>
                                <Image src={deal.image} alt="best deal image" width={100} height={100}/>
                                <div>
                                    <p>{deal.name}</p>
                                    <div>
                                        <p>{deal.price}</p>
                                        <Button variant="destructive"><ShoppingCart size={12}/>Add</Button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                ) : loading && ( <p>no products</p>)}
            
        </section>
    );
}
