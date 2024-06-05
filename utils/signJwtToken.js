import jwt from "jsonwebtoken";

const signToken = async (data) => {
  try {
    const token = await jwt.sign(
      {
        data,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error, "Error when verifying token");
  }
};

export { signToken, verifyToken };
