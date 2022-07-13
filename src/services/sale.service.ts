import { Request } from "express";
import { DocumentDefinition } from "mongoose";
import { SaleInterface } from "../interfaces/sale.interface";
import { vehicleInterface } from "../interfaces/vehicle.interface";
import SaleModel from "../models/sale.model";
import VehicleModel from "../models/vehicle.model";
import { apiFeatures } from "../utilis/apiFeatures";
import logger from "../utilis/logger";

export async function getAllSales(req: Request) {
	try {
		const results = new apiFeatures(
			SaleModel.find({})
				.populate({ path: "vehicle", select: "title" })
				.populate({
					path: "customer",
					select: "firstName lastName title",
				}),
			req.query
		)
			.filter()
			.sort()
			.limitFields()
			.paginate();
		return await results.data;
	} catch (error: any) {
		throw new Error(error);
	}
}
export async function getSingleSale(id: string) {
	try {
		return await SaleModel.findById(id)
			.populate({ path: "vehicle", select: "title" })
			.populate("customer");
	} catch (error: any) {
		throw new Error(error);
	}
}
export async function createSale(input: DocumentDefinition<SaleInterface>) {
	try {
		logger.info(input);
		return await SaleModel.create(input);
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function updateSale(
	id: string,
	input: DocumentDefinition<SaleInterface>
) {
	try {
		const doc = await SaleModel.findById(id);
		if (!doc) {
			throw new Error("Sale not found");
		}
		return await SaleModel.findOneAndUpdate({ _id: id }, input, {
			new: true,
		});
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function deleteSale(id: string) {
	try {
		const doc = await SaleModel.findOneAndDelete({ _id: id });
		if (!doc) {
			throw new Error("Sale not found");
		}
		return doc;
	} catch (e: any) {
		throw new Error(e);
	}
}
