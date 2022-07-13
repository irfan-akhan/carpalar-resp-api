import { DocumentDefinition } from "mongoose";
import userInterface from "../interfaces/user.interface";
import UserModel from "../models/user.models";
import logger from "../utilis/logger";

export async function getAllUsers() {
	try {
		return await UserModel.find();
	} catch (error: any) {
		throw new Error(error);
	}
}
export async function getSingleUser(id: string) {
	try {
		return await UserModel.findById(id);
	} catch (error: any) {
		throw new Error(error);
	}
}
export async function createUser(input: DocumentDefinition<userInterface>) {
	try {
		logger.info(input);
		return await UserModel.create(input);
	} catch (error: any) {
		console.log("error keys are", Object.keys(error));
		console.log("+++++++", error);
		if (
			Object.keys(error).includes("keyPattern") &&
			error.keyPattern.email
		) {
			throw new Error("email already registered");
		}
		throw new Error(error);
	}
}

export async function updateUser(
	id: string,
	input: DocumentDefinition<userInterface>
) {
	try {
		const doc = await UserModel.findById(id);
		if (!doc) {
			throw new Error("User not found");
		}
		return await UserModel.findOneAndUpdate({ _id: id }, input, {
			new: true,
		});
	} catch (e: any) {
		throw new Error(e);
	}
}
export async function deleteUser(id: string) {
	try {
		const doc = await UserModel.findOneAndDelete({ _id: id });
		if (!doc) {
			throw new Error("User not found");
		}
		return doc;
	} catch (e: any) {
		throw new Error(e);
	}
}
