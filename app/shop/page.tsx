import Products from "../../models/products";
import { connectToDB } from "@/utils/database";
import { ProductsType } from "@/lib/types";
import ProductsCategory from "../components/productsCategory";
import Image from "next/image";
import FilterBar from "../components/filterBar";
import Pagination from "../components/pagination";

const PRODUCTS_PER_PAGE = 10;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sortBy?: string; page?: string }>;
}) {
  const params = await searchParams;
  const sortBy = params.sortBy || "default";
  const currentPage = Number(params.page) || 1;

  await connectToDB();

  let allProducts: ProductsType[] = [];
  let totalCount = 0;

  switch (sortBy) {
    case "new":
      try {
        totalCount = await Products.countDocuments({ tag: "new" });
        allProducts = await Products.find({ tag: "new" })
          .skip((currentPage - 1) * PRODUCTS_PER_PAGE)
          .limit(PRODUCTS_PER_PAGE);
      } catch (error) {
        console.log(error);
        throw new Error("Couldnt fetch Products");
      }
      break;

    case "popular":
      try {
        totalCount = await Products.countDocuments({ tag: "popular" });
        allProducts = await Products.find({ tag: "popular" })
          .skip((currentPage - 1) * PRODUCTS_PER_PAGE)
          .limit(PRODUCTS_PER_PAGE);
      } catch (error) {
        console.log(error);
        throw new Error("Couldnt fetch Products");
      }
      break;

    case "bestsales":
      try {
        totalCount = await Products.countDocuments({ tag: "bestsales" });
        allProducts = await Products.find({ tag: "bestsales" })
          .skip((currentPage - 1) * PRODUCTS_PER_PAGE)
          .limit(PRODUCTS_PER_PAGE);
      } catch (error) {
        console.log(error);
        throw new Error("Couldnt fetch Products");
      }
      break;

    default:
      totalCount = await Products.countDocuments();
      allProducts = await Products.find()
        .skip((currentPage - 1) * PRODUCTS_PER_PAGE)
        .limit(PRODUCTS_PER_PAGE);
  }

  const totalPages = Math.ceil(totalCount / PRODUCTS_PER_PAGE);

  return (
    <section className="sm:grid grid-flow-col gap-2 p-4 flex flex-col">
      <div className="row-span-3 hidden sm:block">
        <ProductsCategory />
      </div>
      <div className="sm:col-span-2">
        <FilterBar allProducts={totalCount} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-2 gap-y-10 gap-x-10">
        {allProducts.length > 0 &&
          allProducts.map((product, index) => (
            <div
              key={index}
              className=" w-full max-w-[200px] flex flex-col gap-2 items-center rounded border border-gray-200 p-2"
            >
              <div className="w-[120px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt="Shop item image"
                  width={100}
                  height={100}
                  className="w-30 h-30"
                />
              </div>
              <p className="text-[13px] font-semibold text-[#777777]">
                {product.category}
              </p>
              <p>{product.rating} / 5</p>
              <p className="text-sm font-bold text-center">{product.name}</p>
              <p className="text-p1-color text-sm font-bold">
                ${product.price}
              </p>
            </div>
          ))}
      </div>

      {totalPages > 1 && (
        <div className="col-span-2 mt-6">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </section>
  );
}
