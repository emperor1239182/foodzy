import { connectToDB } from "../../../../utils/database";
import Products from "../../../../models/products";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDB();

    // Get query parameters from URL
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const category = searchParams.get("category");
    const sort = searchParams.get("sortBy");


    let products;

    const key = type || category || sort || "default";

    switch (key) {
      case "recent":
        products = await Products.find({ recent: true }).limit(6);
        break;
      case "Food":
        products = await Products.find({ category: "Food" }).limit(6);
        break;
      case "Fruit":
        products = await Products.find({ category: "Fruit" }).limit(4);
        break;
        case "new" :
          products = await Products.find({tag : "new"});
          break;
          case "popular" :
          products = await Products.find({tag : "popular"});
          break;
          case "bestSeller" :
          products = await Products.find({tag : "bestsales"});
          break;
      default:
        products = await Products.find();
    }

    return NextResponse.json(
      {
        success: true,
        message: "Fetched products successfully",
        data: products,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
