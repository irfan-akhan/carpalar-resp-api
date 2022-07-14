import { Request, Response } from "express";
import ApplicationModel from "../models/application.model";
import SaleModel from "../models/sale.model";
import VehicleModel from "../models/vehicle.model";
import vehicleRouter from "../routes/vehicleRoutes";

export default async function getDashboardStats(req: Request, res: Response) {
	try {
		const vehicles = await VehicleModel.count();
		const orders = await SaleModel.count();
		const applications = await ApplicationModel.count();
		return res.status(200).json({ vehicles, orders, applications });
	} catch (error: any) {
		res.status(400).json({ message: error.toString() });
	}
}
