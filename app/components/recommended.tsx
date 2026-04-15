import Image from "next/image";
import { RecommendedTypes } from "@/lib/types";
const recommends: RecommendedTypes[] = [
  {
    image: "/assets/burger svg.png",
    amount: "86 dishes",
    name: "Main Dish",
  },
  {
    image: "/assets/breakfast.png",
    amount: "12 breakfast",
    name: "Breakfast",
  },
  {
    image: "/assets/strawberries.png",
    amount: "48 dessert",
    name: "Dessert",
  },
  {
    image: "/assets/corn juice.png",
    amount: "255 items",
    name: "Browse All",
  },
  {
    image: "/assets/Fattoush salad.png",
    amount: "205 items",
    name: "Breakfast Food",
  },
];

const gradientTextLight = "bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent"

export default function Recommended() {
  return (
    <>
      <section className="mt-10">
        <h3 className="text-p1-color text-center text-[10px] font-bold">
          CUSTOMER FAVORITES
        </h3>
        <h1 className={`font-bold text-center my-4 text-2xl ${gradientTextLight}`}>
          Popular Categories
        </h1>
        <div className="flex flex-col gap-20 sm:gap-3 xl:gap-10 justify-center sm:justify-normal items-center sm:flex-row sm:mx-auto">
          {recommends.map((meals, index) => (
            <div
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl p-8 sm:p-2 w-60 sm:w-40"
              key={index}
            >
              <div className="bg-gray-300 rounded-full p-2 flex justify-center items-center">
                <Image src={meals.image} width={25} height={25} alt="burger" />
              </div>
              <p className="font-bold text-[13px] max-sm:text-[20px]">{meals.name}</p>
              <p className="text-gray-400 text-[13px]">({meals.amount})</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
