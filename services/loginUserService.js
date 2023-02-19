import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const loginUserService = async (request) => {
  const { email, password } = request.body;

  try {
    const { 
      dataValues : 
      { 
        id, 
        email: userEmail, 
        password: userPassword 
      }} = await User.findOne({ where: { email }});
    const isMatch = await bcrypt.compare(password, userPassword);
    if (!isMatch) {
      return { message: "Incorrect password" ,error:true};
    }
    const payload = {
      id,
      email: userEmail,
    };
    const token = await jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_TIME,
    });
    return {
      token,
      error:false
    };
  } catch (error) {
    return {
      messgae: error.messgae,
      error:true
    };
  }
};
