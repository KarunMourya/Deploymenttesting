import User from "../models/userModel.js";
import Order from "../models/orderModel.js";

export const getUserAllOrderService = async (request) => {
  const { id } = request.user;
  try {
    const user = await User.findOne({
      attributes: ["name", "email"],
      where: {
        id,
      },
      include: [
        { model: Order, attributes: ["price", "products", "createdAt"] },
      ],
    });
    if (!user) {
      return {
        message: error.message,
      };
    } else {
      return {
        user,
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
