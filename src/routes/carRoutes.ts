import Express from "express";
import {
  createCarHandler,
  updateCarHandler,
  getAllCarsHandler,
  getCarHandler,
  deleteCarhandler,
} from "../controllers/car.controller";
const carRouter = Express.Router();

carRouter.route("/").post(createCarHandler).get(getAllCarsHandler);
carRouter
  .route("/:id")
  .patch(updateCarHandler)
  .get(getCarHandler)
  .delete(deleteCarhandler);
export default carRouter;
