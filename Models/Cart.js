import mongoose from "mongoose";
import CartItem from "./CartItem";
import User from "./User";
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    items: [CartItem],
    total_price: Number,
    total_quantity: Number,
    user_id: User,
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
