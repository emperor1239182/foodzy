import {
  Facebook,
  Twitter,
  Instagram,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import Image from "next/image";
export default function Footer() {
  const gradientTextLight =
    "bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent";

  return (
    <section className="grid grid-cols-1 gap-7 sm:grid-cols-4 justify-center bg-gray-200 mt-50 p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center ">
          <Image src="/assets/chef.png" width={70} height={70} alt="app icon" />
          <p className="flex flex-col ">
            <span className={`font-extrabold text-sm ${gradientTextLight}`}>
              Foodzy
            </span>
            <span className="text-[11px]">A Treasure of Tastes</span>
          </p>
        </div>

        <p className="footerText">
          Foodzy is the biggest market of grocery products. Get your daily needs
          from our store
        </p>

        <div className="flex items-center gap-3">
          <MapPin color="red" />
          <p className="footerText">
            51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Mail color="red" /> <p className="footerText">foodzy@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone color="red" />
          <p className="footerText">+91 123 4567890</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 *:text-[12px] *:text-gray-400 [&>h5]:text-black [&>h5]:text-[20px] [&>h5]:font-bold">
        <h5 className="font-bold text-[20px]">Company</h5>
        <p>About Us</p>
        <p>Delivery information</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
        <p>Support Center</p>
      </div>

      <div className="flex flex-col gap-3 *:text-[12px] *:text-gray-400 [&>h5]:text-black [&>h5]:text-[20px] [&>h5]:font-bold">
        <h5 className="text-[20px] text-black font-bold">Category</h5>
        <p>Dairy & Bakery</p>
        <p>Fruits & Vegetable</p>
        <p>Snack & Spice</p>
        <p>Juice & Drinks</p>
        <p>Chicken & Meat</p>
        <p>Fast Food</p>
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-[20px]">Subscribe To Our Newsletter</h5>

        <InputGroup>
          <InputGroupInput
            placeholder="search here..."
            className="placeholder:text-gray-500 placeholder:italic"
          />
          <InputGroupButton>
            <Send size={10} />
          </InputGroupButton>
        </InputGroup>

        <div className="flex items-center gap-2 *:rounded *:p-2 *:bg-gray-200 ">
          <Facebook size={35} />
          <Twitter size={35} />
          <Instagram size={35} />
        </div>
      </div>
    </section>
  );
}
