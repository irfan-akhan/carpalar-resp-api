import { Response, Request } from "express";
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
export async function getSingleCustomerHandler(req: Request, res: Response) {}
export async function updateCustomerHandler(req: Request, res: Response) {}
export async function deleteCustomerHandler(req: Request, res: Response) {}
