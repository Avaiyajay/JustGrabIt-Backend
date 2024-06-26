import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true }, // String is shorthand for {type: String}
    description: { type: String, required: true },
    mainImageURL: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    isBestSeller: { type: Boolean, default: false },
    category: {
      type: String,
      enum: ["Men", "Women", "Unisex", "Kids"],
      message: "{VALUE} is not supported",
    },
    size: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
