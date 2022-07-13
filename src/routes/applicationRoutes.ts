import express from "express";
import {
  createAppliactionsHandler,
  getApplicationHandler,
  getAppliactionsHandler,
  updateApplicationhandler,
} from "../controllers/application.controller";
const applicationRouter = express.Router();

applicationRouter
  .route("/")
  .get(getAppliactionsHandler)
  .post(createAppliactionsHandler);
applicationRouter
  .route("/:id")
  .get(getApplicationHandler)
  .patch(updateApplicationhandler);

export default applicationRouter;
