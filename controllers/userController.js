import User from "../Models/User.js";
import { verifyEmailTemplate } from "../utils/emailTemplates.js";
import sendEmail from "../utils/sendEmail.js";
import { signToken, verifyToken } from "../utils/signJwtToken.js";

const creatUserController = async (req, res) => {
  try {
    let token = null;
    const { firstName, lastName, email } = req.body;

    const newUser = await User.create({ firstName, lastName, email });
    token = await signToken({ isVerified: true, id: newUser._id });
    await sendEmail({
      email,
      template: verifyEmailTemplate({ firstName, token }),
      subject: "Email Verification - JustGrabIt",
    });
    return res.json({ status: 200, msg: "User account created successfully!" });
  } catch (error) {
    console.log(error);
  }
};

const verifyUserEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const {
      data: { isVerified, id },
    } = await verifyToken(token);
    if (isVerified) {
      await User.findByIdAndUpdate({ _id: id }, { isVerified: true });
    }
    return res.json({ status: 200, msg: "Email verified successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { creatUserController, verifyUserEmail };
