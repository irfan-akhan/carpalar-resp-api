import { Request, Response } from "express";
import {
  getAllApplications,
  addApplications,
  updateApplication,
  getApplication,
} from "../services/application.services";

export async function getAppliactionsHandler(req: Request, res: Response) {
  try {
    const applications = await getAllApplications(req.query);
    return res.status(200).json({ applications });
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}
export async function updateApplicationhandler(req: Request, res: Response) {
  try {
    const application = await updateApplication(req.params.id, req.body);
    return res.status(200).json({ application });
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}
export async function getApplicationHandler(req: Request, res: Response) {
  try {
    const application = await getApplication(req.params.id);
    return res.status(200).json({ application });
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}
export async function createAppliactionsHandler(req: Request, res: Response) {
  try {
    const applications = await addApplications(req.body);
    return res.status(200).json({ applications });
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}
