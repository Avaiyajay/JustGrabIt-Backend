import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().max(50).min(1).required(),
  description: Joi.string().max(500).min(1).required(),
  price: Joi.number().min(1).required(),
  category: Joi.string().allow(["Men", "Women", "Unisex", "Kids"]).required(),
});

export default productSchema;
