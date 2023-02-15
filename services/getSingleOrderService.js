import User from "../models/userModel.js";
import Order from "../models/orderModel.js";

export const getSingleOrderService = async (request) => {
  const { id } = request.params;
  try {
    const order = await Order.findOne({
      attributes: ["price", "products", "userId"],
      where: {
        id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });
    if (!order) {
      return {
        message: error.message,
      };
    } else {
      return {
        order,
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
