"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductsCategory() {
  const [priceRange, setPriceRange] = useState([25, 50]);

  return (
    <section>
      <div className="flex flex-col gap-3 bg-gray-100 w-50 p-2">
        <h5 className="font-bold mb-4">Product Category</h5>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="fruits" />
            <Label htmlFor="fruits">Fruits</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="vegetables" />
            <Label htmlFor="vegetables">Vegetables</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dairy" />
            <Label htmlFor="dairy">Dairy & Bakery</Label>
          </div>
        </div>

        <div className="filter">
          <p className="text-[12px] font-semibold my-3">Filter By Price</p>
          <Slider
            defaultValue={priceRange}
            onValueChange={setPriceRange}
            max={100}
            step={5}
            className="w-full max-w-xs my-3"
          />
          <p>
            {" "}
            <span className="font-bold">Price : </span>{" "}
            <span className="text-[13px]">${priceRange[0]}</span> -{" "}
            <span className="text-[13px]">${priceRange[1]}</span>
          </p>
          <Button variant="destructive" className="h-7">
            Filter
          </Button>
        </div>

        <div className="space-y-3 my-3">
          <h5 className="font-bold mb-4">Product Category</h5>
          <div className="flex items-center space-x-2">
            <Checkbox id="blue" />
            <Label htmlFor="blue"> Blue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="yellow" />
            <Label htmlFor="yellow">Yellow</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="red" />
            <Label htmlFor="red">Red</Label>
          </div>
        </div>

        <div className="space-y-3 my-3">
          <h5 className="font-bold mb-4">Product Category</h5>
          <div className="flex items-center space-x-2">
            <Checkbox id="2kg" />
            <Label htmlFor="2kg">2kg pack</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="20kg" />
            <Label htmlFor="20kg">20kg pack</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="30kg" />
            <Label htmlFor="30kg">30kg pack</Label>
          </div>
        </div>
      </div>
    </section>
  );
}
