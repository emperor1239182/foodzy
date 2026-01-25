"use client";
import { Phone, User, Heart, ShoppingCart, Menu, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="hidden sm:flex justify-evenly">
        <ul className="flex gap-5 text-sm">
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
          <li>Pages</li>
          <li>Blog</li>
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
          <nav className="w-full h-screen bg-accent z-20 fixed inset-0 text-2xl p-4 transition-all">
            <XIcon className="absolute top-2 right-3" onClick={()=> setIsOpen(false)}/>
            <ul className="flex flex-col gap-8 items-center mt-9">
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

        <div className="hidden border border-b-cyan-300 sm:flex w-80 justify-between items-center gap-1 ">
          <input className="w-[59%]" />
          <p className="border-cyan-300 border-l p4 text-[11px]">
            All Categories
          </p>
          <button className="p4 bg-black text-white text-[11px]">search</button>
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
