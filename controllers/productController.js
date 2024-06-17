import Product from "../Models/Product.js";
import { uploadFile } from "../utils/driveUpload.js";
import tryCatch from "../utils/tryCatch.js";
import path from "path";
import { v4 as uuidV4 } from "uuid";

const createProductController = tryCatch(async (req, res) => {
  const { name, description, price, category, size } = req.body;
  const fileNames = [];
  await Promise.all(
    req.files.map(async (file) => {
      const fileName = `${uuidV4()}${path.extname(file.originalname)}`;
      fileNames.push(fileName);
      return await uploadFile(file, fileName);
    })
  );
  await Product.create({
    name,
    description,
    price,
    category,
    size,
    mainImageURL: fileNames[0],
  });
  return res.status(200).json({ msg: "Record Created Successfully" });
});

const getProducts = tryCatch(async (req, res) => {
  const productList = await Product.find({ ...req.body });
  return res.status(200).json({ data: productList });
});

export { createProductController, getProducts };
