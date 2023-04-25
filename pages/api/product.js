import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Product.find());
  }

  if (method === "POST") {
    const { name, desc, price } = req.body;
    const productDoc = await Product.create({
      name,
      desc,
      price,
    });
    res.json(productDoc);
  }
}
