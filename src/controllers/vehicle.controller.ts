import { Request, Response } from "express";
import {
	createVehicle,
	getVehicles,
	updateVehicle,
	getSingleVehicle,
	deleteVehicle,
	searchVehicles,
} from "../services/vehicle.service";
import logger from "../utilis/logger";

export async function searchVehicleHandler(req: Request, res: Response) {
	try {
		const { term }: any = req.query;

		const vehicles = await searchVehicles(term);
		console.log("search results", vehicles);
		return res.status(200).json({ vehicles });
	} catch (e: any) {
		logger.error("catch habdelr", e);
		return res.status(400).send(e.message);
	}
}
export async function getAllVehiclesHandler(req: Request, res: Response) {
	try {
		const vehicles = await getVehicles(req.query);
		return res.status(200).json({ vehicles });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function createVehicleHandler(req: Request, res: Response) {
	try {
		const vehicle = await createVehicle(req.body);
		return res.status(201).json({ vehicle });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function updateVehicleHandler(req: Request, res: Response) {
	try {
		const vehicle = await updateVehicle(req.params.id, req.body);
		return res.status(200).json({ vehicle });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function getVehicleHandler(req: Request, res: Response) {
	try {
		const vehicle = await getSingleVehicle(req.params.id);

		if (!vehicle) {
			return res.status(404).send("Not found");
		}
		return res.status(200).json({ vehicle });
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
export async function deleteVehiclehandler(req: Request, res: Response) {
	try {
		const vehicle = await deleteVehicle(req.params.id);

		if (vehicle) {
			return res.status(200).send("Deleted successfully");
		}
		return res.status(404).send("Not found");
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
}
