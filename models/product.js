import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  desc: String,
  price: Number,
});

export const Product = models.Product || model("Product", ProductSchema);
