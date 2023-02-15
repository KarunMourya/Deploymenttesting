import Order from "../models/orderModel.js";

export const addOrderService = async (request) => {
  const {id} = request.user
  const { price, products } = request.body;

  try {
    const order = await Order.create({userId : id,price,products});
    if(!order) {
      return {
        message : "order not created"        
      }
    } 
    return {
      ...order.dataValues,
      message : "order created"        
    }
  } catch (error) {
    return {
      message : error.message
    }
  }
}
