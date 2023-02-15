import User from "../models/userModel.js";

export const getUserDetailsService = async (request) => {
  const { id } = request.user;
  
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return {
        message: "ID not found",
      };
    } else {
      return user;
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
