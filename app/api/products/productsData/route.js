import { connectToDB } from "../../../../utils/database";
import Products from "../../../../models/products";
import { NextResponse } from "next/server";

//GET request
export async function GET() {
  try {
    await connectToDB();

    const products = await Products.find({ recent: true })
    .limit(6)

    return NextResponse.json(
      {
        success: true,
        message: "fetched all new products successfully",
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
      { status: 500 },
    );
  }
}
