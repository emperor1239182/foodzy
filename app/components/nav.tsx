"use client";
import {
  Phone,
  User,
  Heart,
  ShoppingCart,
  Menu,
  XIcon,
  Search,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="hidden sm:flex justify-evenly">
        <ul className="flex items center gap-5 text-sm">
          <Button variant="link" className="cursor-pointer">
            <Link href="/"> Home </Link></Button>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="cursor-pointer">
                  Category <ArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>All Categories</DropdownMenuLabel>
                  <DropdownMenuItem>Main Dish</DropdownMenuItem>
                  <DropdownMenuItem>Dessert</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Breakfast</DropdownMenuItem>
                  <DropdownMenuItem>Breakfast Food</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="cursor-pointer">
                   Products <ArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Popular</DropdownMenuLabel>
                  <DropdownMenuItem>Vegetables</DropdownMenuItem>
                  <DropdownMenuItem>Dessert</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Fruits</DropdownMenuItem>
                  <DropdownMenuItem>Snacks</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <Button variant="link" className="cursor-pointer">Pages</Button>
          <Button variant="link" className="cursor-pointer">Blog</Button>
        </ul>
        <div className="hidden sm:flex items-center gap-2">
          <Phone size={17} />
          <p>+123 (456) (789)</p>
        </div>
      </div>

      <div className="sm:border border-gray-200" />

      <div className="flex justify-between px-2 sm:justify-evenly items-center">
        <div className="flex items-center ">
          <Image src="/assets/chef.png" width={70} height={70} alt="app icon" />
          <p className="flex flex-col ">
            <span className="font-extrabold text-sm">Foodzy</span>
            <span className="text-[11px]">A Treasure of Tastes</span>
          </p>
        </div>

        <Menu className="sm:hidden" onClick={() => setIsOpen(true)} />

        {isOpen && (
          <nav className="w-full h-screen bg-accent z-20 fixed inset-0 text-2xl p-4 animate-in slide-in-from-right duration-800">
            <XIcon
              className="absolute top-2 right-3"
              onClick={() => setIsOpen(false)}
            />
            <ul className={cn("flex flex-col gap-8 items-center mt-9")}>
              <li>Home</li>
              <li>Category</li>
              <li>Products</li>
              <li>Pages</li>
              <li>Blog</li>
              <li className="flex flex-col items-center text-[12px]">
                <User size={18} /> Account
              </li>
              <li className="flex flex-col items-center text-[12px]">
                <Heart size={18} /> Wishlist
              </li>
              <li className="flex flex-col items-center text-[12px]">
                <ShoppingCart size={18} /> Cart
              </li>
            </ul>
          </nav>
        )}

        <div className="hidden sm:block lg:w-xl">
          <InputGroup>
            <InputGroupInput
              placeholder="Search for items..."
              id="inline-end-input"
            />
            <InputGroupAddon align="inline-end">
              <div className="bg-black p-2 rounded "><Search size={13} color="white"/></div>
            </InputGroupAddon>
            <InputGroupButton>
              All Categories
              <ArrowDown />
            </InputGroupButton>
          </InputGroup>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <p className="flex flex-col items-center text-[12px]">
            <User size={18} /> Account
          </p>
          <p className="flex flex-col items-center text-[12px]">
            <Heart size={18} /> Wishlist
          </p>
          <p className="flex flex-col items-center text-[12px]">
            <ShoppingCart size={18} /> Cart
          </p>
        </div>
      </div>
    </nav>
  );
}
