import Product from "../Models/Product.js";
import path from "path";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, size } = req.body;
    const { filename } = req.file;
    const mainImageURL = path.join("images/productImages", filename);
    await Product.create({
      name,
      description,
      price,
      category,
      size,
      mainImageURL,
    });
    return res.status(200).json({ msg: "Record Created Successfully" });
  } catch (error) {
    console.log("error occured");
  }
};
