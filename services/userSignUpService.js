import { getHashedPassword } from "../lib/getHashedPassword.js";
import User from "../models/userModel.js";

export const userSignUpService = async (request) => {
  const { name, city, education, email, password } = request.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return { message: "User already exists", error: true };
    }
    const hash = await getHashedPassword(password);
    const user = await User.create({
      name,
      city,
      education,
      email,
      password: hash,
    });

    if (!user) {
      return {
        message: "error occur during adding data",
        error: true,
      };
    } else {
      return { ...user.dataValues, message: "Successfully added data",error:false };
    }
  } catch (error) {
    return {
      message: error.message,
      error:true
    };
  }
};
