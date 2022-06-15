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
    if (input.password) {
      doc.password = input.password;
    }
    const updatedDoc = { ...doc, ...input };

    return await doc.save();
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
