import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

const createProductOnStripe = async (productInfo) => {
  const { name, imageURLs: images } = productInfo;
  const { id: stripeProductId } = await stripe.products.create({
    name,
    images,
  });
  return stripeProductId;
};

export { createProductOnStripe };
