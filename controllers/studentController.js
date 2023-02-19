import { loginUserService } from "../services/loginUserService.js";
import { userSignUpService } from "../services/userSignUpService.js";
import { deleteStudentService } from "../services/deleteStudentService.js";
import { getSingleOrderService } from "../services/getSingleOrderService.js";
import { getUserDetailsService } from "../services/getSingleUserDetailsService.js";
import { updateStudentService } from "../services/updateStudentService.js";
import { addOrderService } from "../services/addOrderService.js";
import { getUserAllOrderService } from "../services/getUserAllOrderService.js";
import { deleteOrderService } from "../services/deleteOrderService.js";
import { deleteAnyUserService } from "../services/deleteAnyUserService.js";

export const addUserDataController = async (request, response) => {
  const { name, city, education, email, password } = request.body;
  if (!name) {
    return response
      .status(400)
      .send({ message: "User name is not found", error: true });
  } else if (!city) {
    return response
      .status(400)
      .send({ message: "city is not found", error: true });
  } else if (!education) {
    return response
      .status(400)
      .send({ message: "education is not found", error: true });
  } else if (!email) {
    return response
      .status(400)
      .send({ message: "email is not found", error: true });
  } else if (!password) {
    return response
      .status(400)
      .send({ message: "password is not found", error: true });
  }
  const data = await userSignUpService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const loginUserController = async (request, response) => {
  const { email, password } = request.body;
  if (!email) {
    return response
      .status(400)
      .send({ error: true, message: "Email is not found" });
  } else if (!password) {
    return response
      .status(400)
      .send({ error: true, message: "password is not found" });
  }
  const data = await loginUserService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const deleteStudentDataController = async (request, response) => {
  const data = await deleteStudentService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const updateStudentDataController = async (request, response) => {
  const data = await updateStudentService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const getSingleStudentDataController = async (request, response) => {
  const data = await getUserDetailsService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const addOrderDataController = async (request, response) => {
  const { price, products } = request.body;
  if (!price) {
    return response.send("price is not found");
  } else if (!products) {
    return response.send("products is not found");
  }
  const data = await addOrderService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const deleteOrderController = async (request, response) => {
  const data = await deleteOrderService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const getSingleOrderController = async (request, response) => {
  const data = await getSingleOrderService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const getUserAllOrderController = async (request, response) => {
  const data = await getUserAllOrderService(request);
  if (!data.error) return response.status(200).send(data);
  else return response.status(400).send(data);
};

export const deleteAnyStudentDataController = async (request, response) => {
  const data = await deleteAnyUserService(request);
  return response.send(data);
};
