import { Response, Request } from "express";
import ApplicationModel from "../models/application.model";
import SaleModel from "../models/sale.model";
import {
	createCustomer,
	deleteCustomer,
	getAllCustomers,
	getSingleCustomer,
	updateCustomer,
} from "../services/customer.service";
import logger from "../utilis/logger";

export async function createCustomerHandler(req: Request, res: Response) {
	try {
		const customer = await createCustomer(req.body);
		return res.status(200).json({ customer });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function getAllCustomersHandler(req: Request, res: Response) {
	try {
		const customers = await getAllCustomers(req.query);
		return res.status(200).json({ customers });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function getSingleCustomerHandler(req: Request, res: Response) {
	try {
		const customer = await getSingleCustomer(req.params.id);
		if (!customer) {
			return res.status(404).send("customer not found");
		}
		const sales = await SaleModel.find({
			customer: req.params.id,
		}).lean();

		const cust = { ...customer, sales: sales };
		return res.status(200).json({ customer: cust });
	} catch (e: any) {
		logger.error(e);
		return res.status(404).send(e.message);
	}
}
export async function updateCustomerHandler(req: Request, res: Response) {}
export async function deleteCustomerHandler(req: Request, res: Response) {}
