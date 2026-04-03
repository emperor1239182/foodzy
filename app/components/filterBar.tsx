"use client";
import { TableCellsSplit, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";



export default function FilterBar({ allProducts }: { allProducts: number }) {
  const [cell, setCell] = useState<"cell" | "filter">();

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", value);
    router.push(`?${params.toString()}`);
  
  };

  return (
    <div className="flex justify-between bg-gray-200 p-1 items-center">
      <div className="flex gap-2">
        <div className="flex gap-1">
          <div
            onClick={() => setCell("cell")}
            className={cn(
              "p-1 bg-white rounded flex justify-center items-center",
              cell === "cell" && "bg-red-500 text-white",
            )}
          >
            <TableCellsSplit size={14} />
          </div>
          <div
            onClick={() => setCell("filter")}
            className={cn(
              "p-1 bg-white rounded flex justify-center items-center",
              cell === "filter" && "bg-red-500 text-white",
            )}
          >
            <SlidersHorizontal size={14} />
          </div>
        </div>
        <p className="text-[12px]">We found {allProducts} items for you!</p>
      </div>

      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded">
        <p className="sm:text-[12px] text-[13px]">Sort By</p>
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="sm:w-35 w-20">
            <SelectValue placeholder="Featured" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="bestsales">Best Sales</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
