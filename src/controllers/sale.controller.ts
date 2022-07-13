import { Request, Response } from "express";
import {
	createSale,
	getAllSales,
	updateSale,
	deleteSale,
	getSingleSale,
} from "../services/sale.service";
import logger from "../utilis/logger";

export async function getSaleshandler(req: Request, res: Response) {
	try {
		const sales = await getAllSales(req);
		return res.status(200).json({ sales });
	} catch (e: any) {
		logger.error(e);
		return res.status(409).send(e.message);
	}
}

export async function createSaleHandler(req: Request, res: Response) {
	try {
		await createSale(req.body);
		return res.status(201).send("sale created successfully");
	} catch (e: any) {
		logger.error(e);
		return res.status(409).send(e.message);
	}
}

export async function updateSaleHandler(req: Request, res: Response) {
	try {
		const sale = await updateSale(req.params.id, req.body);

		return res.status(200).json({ sale });
	} catch (e: any) {
		logger.error(e);
		return res.status(404).send(e.message);
	}
}

export async function singleSalehandler(req: Request, res: Response) {
	try {
		const sale = await getSingleSale(req.params.id);
		if (!sale) {
			return res.status(404).send("Sale not found");
		}
		return res.status(200).json({ sale });
	} catch (e: any) {
		logger.error(e);
		return res.status(404).send(e.message);
	}
}
export async function deleteSalehandler(req: Request, res: Response) {
	try {
		const sale = await deleteSale(req.params.id);
		if (!sale) {
			return res.status(404).send("sale not found");
		}
		return res.status(200).json({ sale });
	} catch (e: any) {
		logger.error(e);
		return res.status(404).send(e.message);
	}
}
