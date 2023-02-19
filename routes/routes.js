import express from "express";
import {
  getSingleOrderController,
  getSingleStudentDataController,
  updateStudentDataController,
  addUserDataController,
  deleteStudentDataController,
  loginUserController,
  addOrderDataController,
  getUserAllOrderController,
  deleteOrderController,
  deleteAnyStudentDataController,
} from "../controllers/studentController.js";
import { requestLogMiddleware } from "../middlewares/requestLogMiddleware.js";
import authenticateMiddleware from "../middlewares/authenticateJwtMiddleware.js";

const routes = express.Router();
routes.use(requestLogMiddleware);

routes.post("/login", loginUserController);
routes.post("/register", addUserDataController);

routes.use(authenticateMiddleware);
//user routes
routes.get("/profile", getSingleStudentDataController);
routes.delete("/profile/:id", deleteAnyStudentDataController);
routes.put("/profile", updateStudentDataController);
routes.delete("/profile", deleteStudentDataController);
//order routes
routes.post("/createorder", addOrderDataController);
routes.delete("/order/:id", deleteOrderController);
//relationship routes
routes.get("/order/:id", getSingleOrderController);
routes.get("/orders", getUserAllOrderController);

export default routes;
