import { Router } from "express";
import {
	getAllCustomersHandler,
	createCustomerHandler,
	getSingleCustomerHandler,
	deleteCustomerHandler,
	updateCustomerHandler,
} from "../controllers/customer.controller";

const customerRouter = Router();

customerRouter
	.route("/")
	.get(getAllCustomersHandler)
	.post(createCustomerHandler);
customerRouter
	.route("/:id")
	.get(getSingleCustomerHandler)
	.post(deleteCustomerHandler)
	.patch(updateCustomerHandler);

export default customerRouter;
