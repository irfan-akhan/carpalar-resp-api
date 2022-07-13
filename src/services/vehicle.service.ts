import { DocumentDefinition } from "mongoose";
import { vehicleInterface } from "../interfaces/vehicle.interface";
import VehicleModel from "../models/vehicle.model";
import { apiFeatures } from "../utilis/apiFeatures";

export async function createVehicle(
	input: DocumentDefinition<vehicleInterface>
) {
	try {
		return await VehicleModel.create(input);
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function deleteVehicle(id: string) {
	try {
		return await VehicleModel.findOneAndDelete({ _id: id });
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function updateVehicle(
	id: string,
	input: DocumentDefinition<vehicleInterface>
) {
	try {
		return await VehicleModel.findOneAndUpdate({ _id: id }, input, {
			new: true,
		});
	} catch (e: any) {
		throw new Error(e);
	}
}

export async function getSingleVehicle(id: string) {
	try {
		return await VehicleModel.findById(id);
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function getVehicles(query: any) {
	try {
		// return await VehicleModel.find({});
		const results = new apiFeatures(VehicleModel.find({}), query)
			.filter()
			.paginate()
			.sort()
			.limitFields();
		return results.data;
	} catch (e: any) {
		throw new Error(e);
	}
}
