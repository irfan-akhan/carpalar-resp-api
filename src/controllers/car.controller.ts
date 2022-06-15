import { Request, Response } from "express";
import {
  createCar,
  getCars,
  updateCar,
  getSingleCar,
  deleteCar,
} from "../services/car.service";
import logger from "../utilis/logger";

export async function getAllCarsHandler(req: Request, res: Response) {
  try {
    const cars = await getCars();
    return res.status(200).json({ cars });
  } catch (e: any) {
    logger.error(e);
    return res.status(400).send(e.message);
  }
}
export async function createCarHandler(req: Request, res: Response) {
  try {
    const car = await createCar(req.body);
    return res.status(201).json({ car });
  } catch (e: any) {
    logger.error(e);
    return res.status(400).send(e.message);
  }
}
export async function updateCarHandler(req: Request, res: Response) {
  try {
    const car = await updateCar(req.params.id, req.body);
    return res.status(200).json({ car });
  } catch (e: any) {
    logger.error(e);
    return res.status(400).send(e.message);
  }
}
export async function getCarHandler(req: Request, res: Response) {
  try {
    const car = await getSingleCar(req.params.id);

    if (!car) {
      return res.status(404).send("Not found");
    }
    return res.status(200).json({ car });
  } catch (e: any) {
    logger.error(e);
    return res.status(400).send(e.message);
  }
}
export async function deleteCarhandler(req: Request, res: Response) {
  try {
    const car = await deleteCar(req.params.id);

    if (car) {
      return res.status(200).send("Deleted successfully");
    }
    return res.status(404).send("Not found");
  } catch (e: any) {
    logger.error(e);
    return res.status(400).send(e.message);
  }
}
