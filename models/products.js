import mongoose from "mongoose";

const { Schema, models, model } = mongoose;


const ProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    image: String,
    category: String,
    stock: { type: Number, default: 0 },
    recent: { type: Boolean, default: true },
    sold : Number,
    rating : Number,
    tag : String
  },
  { timestamps: true },
);

const Products = models.Products || model("Products", ProductsSchema);
export default Products;
