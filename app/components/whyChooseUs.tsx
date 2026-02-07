import Image from "next/image";
import { Truck, ScrollText, Hamburger } from "lucide-react";
import { ChooseType } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function WhyChooseUs() {
  const benefits: ChooseType[] = [
    {
      icon: <Truck />,
      heading: "Convenient and Reliable",
      text: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
    },
    {
      icon: <ScrollText />,
      heading: "Variety of Options",
      text: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
    },
    {
      icon: <Hamburger />,
      heading: "Eat Burger",
      text: "Our burgers are grilled to perfection, with juicy parties and flavorful toppings that make every bite a delicious experience",
    },
  ];
  return (
    <section className="mt-30 mx-3">
      <div className="flex flex-col sm:flex-row sm:justify-around">
       <div className="w-full max-w-48">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <Image
          src="/assets/choose diet.png"
          alt="Photo"
          fill
          className="rounded-lg object-cover "
        />
      </AspectRatio>
    </div>

        <div className="flex flex-col gap-3 sm:w-60 lg:w-100">
          <h3 className="font-bold text-lg">Why People Choose Us?</h3>

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 rounded shadow-sm p-2"
            >
              <p className="text-yellow-500">{benefit.icon} </p>
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-[14px]">{benefit.heading}</h4>
                <p className="text-[11px] xl:text-16px">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
