import Order from "../models/orderModel.js"
export const deleteOrderService = async (request) => {
  const { id:userId } = request.user;
  const {id:orderId} = request.params;
  try {
    const deletedOrder = await Order.destroy({
      where: {
        id:orderId,
        userId:userId
      },
    });
    if (!deletedOrder) {
      return {
        message: "unsuccessfully deleted",
      };
    } else {
      return {
        message: "successfully deleted",
      };
    }
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
