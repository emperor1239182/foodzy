"use client";
import { Send, Tag, Handshake, ClipboardList, Package } from "lucide-react";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChooseType } from "@/lib/types";

const ads: ChooseType[] = [
  {
    icon: <Tag size={45} color="green" />,
    heading: "Best prices & offers",
    text: "Orders $50 or more",
  },

  {
    icon: <Handshake size={45} color="green" />,
    heading: "Free delivery",
    text: "24/7 amazing services",
  },

  {
    icon: <ClipboardList size={45} color="green" />,
    heading: "Great daily deal",
    text: "When you sign up",
  },

  {
    icon: <Package size={45} color="green" />,
    heading: "Easy returns",
    text: "Within 30 days",
  },
];
export default function Advert() {
  return (
    <section className="mt-30">
      <div className="max-w-7xl rounded mx-auto px-6 py-6 sm:flex gap-10 bg-linear-to-r from-[#7a6a3c] to-[#000000]">
        <div className="flex flex-col gap-3 justify-center">
          <h3 className="text-xl md:text-2xl xl:text3xl leading-tight font-bold text-white">
            Stay home and get your daily <br /> needs from our shop
          </h3>
          <p className="text-[10px] text-p2-color">
            Start your dailing shipping with{" "}
            <span className="text-p3-color">Nest Mart</span>
          </p>

          <InputGroup>
            <InputGroupInput placeholder="Your email address" />
            <InputGroupAddon>
              <Send size={10} />
            </InputGroupAddon>
            <InputGroupButton className="bg-p1-color rounded-full text-white p-4 text-sm">
              Subscribe
            </InputGroupButton>
          </InputGroup>
        </div>
        <div className="relative justify-end max-w-full mt-4 sm:mt-0">
          <Image
            src="/assets/farmer man.png"
            alt="farmer"
            width={500}
            height={500}
            className="md:w-120 xl:w-180 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

   <div className="flex flex-col sm:flex-row gap-10 mt-5 p-1 sm:justify-evenly sm:items-center">
  {ads.map((advert, index) => (
    <div
      key={index}
      className={`flex gap-3 max-w-96 bg-gray-200 p-3 ${
        index % 2 === 0 
          ? "self-start lg:self-auto" 
          : "self-end lg:self-auto"
      }`}
    >
      <p>{advert.icon}</p>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-[15px]">{advert.heading}</p>
        <p className="text-[10px]">{advert.text}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
