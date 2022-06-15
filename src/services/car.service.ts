import { DocumentDefinition } from "mongoose";
import { carInterface } from "../interfaces/car.interface";
import CarModel from "../models/car.model";

export async function createCar(input: DocumentDefinition<carInterface>) {
  try {
    return await CarModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
export async function deleteCar(id: string) {
  try {
    return await CarModel.findOneAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
}
export async function updateCar(
  id: string,
  input: DocumentDefinition<carInterface>
) {
  try {
    return await CarModel.findOneAndUpdate({ _id: id }, input, { new: true });
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getSingleCar(id: string) {
  try {
    return await CarModel.findById(id);
  } catch (e: any) {
    throw new Error(e);
  }
}
export async function getCars() {
  try {
    return await CarModel.find({});
  } catch (e: any) {
    throw new Error(e);
  }
}
