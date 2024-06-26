import mongoose from "mongoose";
import Product from "./Product";
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    product_id: Product,
    price: { type: Number, required: true },
    Quantity: { type: Number, required: true },
    size: String,
  },
  { timestamps: true }
);

const CartItem = mongoose.model("CartItem", cartSchema);
export default CartItem;
