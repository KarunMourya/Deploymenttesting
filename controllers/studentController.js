import { loginUserService } from "../services/loginUserService.js";
import { userSignUpService } from "../services/userSignUpService.js";
import { deleteStudentService } from "../services/deleteStudentService.js";
import { getSingleOrderService } from "../services/getSingleOrderService.js";
import { getUserDetailsService } from "../services/getSingleUserDetailsService.js";
import { updateStudentService } from "../services/updateStudentService.js";
import { addOrderService } from "../services/addOrderService.js";
import {getUserAllOrderService} from '../services/getUserAllOrderService.js'
import { deleteOrderService } from "../services/deleteOrderService.js";
import {deleteAnyUserService} from "../services/deleteAnyUserService.js";
import { html } from "../design.js";

export const welcomeController = async (request, response) => {
  return response.send(html);
};

export const addUserDataController = async (request, response) => {
  const { name, city, education,email,password } = request.body;
  if (!name) {
    return response.send("User name is not found");
  } else if (!city) {
    return response.send("City is not found");
  } else if (!education) {
    return response.send("education is not found");
  } else if (!email) {
    return response.send("Email is not found");
  } else if (!password) {
    return response.send("password is not found");
  }
  const data = await userSignUpService(request);
  return response.send(data);
};

export const loginUserController = async (request,response) => {
  const {email,password} = request.body;
  if (!email) {
    return response.send("Email is not found");
  } else if (!password) {
    return response.send("password is not found");
  }
  const data = await loginUserService(request);
  return response.send(data);
};

export const deleteStudentDataController = async (request, response) => {
  const data = await deleteStudentService(request);
  return response.send(data);
};

export const updateStudentDataController = async (request, response) => {
  const data = await updateStudentService(request);
  return response.send(data);
};

export const getSingleStudentDataController = async (request, response) => {
  const data = await getUserDetailsService(request);
  response.send(data);
};

export const addOrderDataController = async (request,response) => {
  const { price, products } = request.body;
  if (!price) {
    return response.send("price is not found");
  } else if (!products) {
    return response.send("products is not found");
  }
  const data = await addOrderService(request);
  return response.send(data);  
}

export const deleteOrderController = async (request, response) => {
  const data = await deleteOrderService(request);
  return response.send(data);
};

export const getSingleOrderController = async (request, response) => {
  const data = await getSingleOrderService(request);
  return response.send(data);
};

export const getUserAllOrderController = async (request, response) => {
  const data = await getUserAllOrderService(request);
  return response.send(data);
};

export const deleteAnyStudentDataController = async (request, response) => {
  const data = await deleteAnyUserService(request);
  return response.send(data);
};
