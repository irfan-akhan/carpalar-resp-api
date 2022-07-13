import Express from "express";
import {
	createSaleHandler,
	getSaleshandler,
	updateSaleHandler,
	deleteSalehandler,
	singleSalehandler,
} from "../controllers/sale.controller";
const salesRouter = Express.Router();

salesRouter.route("/").get(getSaleshandler).post(createSaleHandler);
salesRouter
	.route("/:id")
	.patch(updateSaleHandler)
	.get(singleSalehandler)
	.delete(deleteSalehandler);

export default salesRouter;
