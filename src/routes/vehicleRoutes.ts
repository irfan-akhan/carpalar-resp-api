import Express from "express";
import {
  createVehicleHandler,
  updateVehicleHandler,
  getAllVehiclesHandler,
  getVehicleHandler,
  deleteVehiclehandler,
} from "../controllers/vehicle.controller";
const vehicleRouter = Express.Router();

vehicleRouter.route("/").post(createVehicleHandler).get(getAllVehiclesHandler);
vehicleRouter
  .route("/:id")
  .patch(updateVehicleHandler)
  .get(getVehicleHandler)
  .delete(deleteVehiclehandler);
export default vehicleRouter;
