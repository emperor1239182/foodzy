import { connectToDB } from "../../../utils/database";
import Products from "../../../models/products";

export async function POST(request) {
  try {
    await connectToDB();

    const body = await request.json();

    const products = await Products.insertMany(body);

    return Response.json(
      {
        success: true,
        message: `${products.length} products created successfully`,
        data: products,
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
