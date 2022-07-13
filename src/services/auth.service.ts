import bcrypt from "bcrypt";
import userInterface from "../interfaces/user.interface";
import UserModel from "../models/user.models";
import { generateToken } from "../utilis/generateToken";
import logger from "../utilis/logger";

export async function signIn(input: userInterface) {
	try {
		const user = await UserModel.findOne({ email: input.email });
		if (!user) {
			throw new Error("User not found");
		}
		const isPasswordValid = bcrypt.compareSync(
			input.password,
			user.password
		);
		logger.fatal(isPasswordValid);
		if (!isPasswordValid) {
			throw new Error("Invalid password");
		}
		delete user.password;
		const token = await generateToken(user);
		return { token, user };
	} catch (e: any) {
		throw new Error(e);
	}
}
