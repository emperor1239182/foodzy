import Products from "../../models/products";
import { connectToDB } from "@/utils/database";
import { ProductsType } from "@/lib/types";
import ProductsCategory from "../components/productsCategory";
import Image from "next/image";
import FilterBar from "../components/filterBar";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sortBy?: string }>;
}) {
  const params = await searchParams;
  const sortBy = params.sortBy || "default";

  await connectToDB();

  let allProducts: ProductsType[] = [];

  switch (sortBy) {
    case "new":
      try {
        allProducts = await Products.find({ tag: "new" });
      } catch(error){
        console.log(error)
        throw new Error("Couldnt fetch Products");
      }
      break;

    case "popular":
      try{
        allProducts = await Products.find({ tag: "popular" });
      } catch(error) {
        console.log(error);
        throw new Error("Couldnt fetch Products");
      }
      break;

    case "bestsales":
      try{
        allProducts = await Products.find({ tag: "bestsales" });
      } catch(error){
        console.log(error)
        throw new Error("Couldnt fetch Products");
      }
      break;
      
    default:
      allProducts = await Products.find();
  }

  return (
    <section className="sm:grid grid-flow-col gap-2 p-4 flex flex-col">
      <div className="row-span-3 hidden sm:block">
        <ProductsCategory />
      </div>
      <div className="sm:col-span-2">
        <FilterBar allProducts={allProducts.length} />
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-y-10">
        {allProducts.length > 0 &&
          allProducts.map((product, index) => (
            <div
              key={index}
              className="w-[150px] flex flex-col gap-2 items-center rounded border border-gray-200 p-2"
            >
              <Image
                src={product.image}
                alt="Shop item image"
                width={100}
                height={100}
                className="w-20 h-20 rounded"
              />
              <p className="text-[13px] text-gray-200">{product.category}</p>
              <p>{product.rating} / 5</p>
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-orange-400 text-sm">{product.price}</p>
            </div>
          ))}
      </div>
    </section>
  );
}