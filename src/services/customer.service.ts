import { DocumentDefinition } from "mongoose";
import userInterface from "../interfaces/user.interface";
import CustomerModel from "../models/customer.models";
import { apiFeatures } from "../utilis/apiFeatures";
import logger from "../utilis/logger";

export async function getAllCustomers(query: any) {
	try {
		const { data } = new apiFeatures(CustomerModel.find({}), query);
		return await data;
	} catch (error: any) {
		logger.fatal(error);
		throw new Error(error);
	}
}
export async function getSingleCustomer(id: string) {
	try {
		return await CustomerModel.findById(id);
	} catch (error: any) {
		throw new Error(error);
	}
}
export async function createCustomer(input: DocumentDefinition<userInterface>) {
	try {
		logger.info(input);
		return await CustomerModel.create(input);
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function updateCustomer(
	id: string,
	input: DocumentDefinition<userInterface>
) {
	try {
		const doc = await CustomerModel.findById(id);
		if (!doc) {
			throw new Error("User not found");
		}
		return await CustomerModel.findOneAndUpdate({ _id: id }, input, {
			new: true,
		});
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function deleteCustomer(id: string) {
	try {
		const doc = await CustomerModel.findOneAndDelete({ _id: id });
		if (!doc) {
			throw new Error("User not found");
		}
		return doc;
	} catch (e: any) {
		throw new Error(e);
	}
}
