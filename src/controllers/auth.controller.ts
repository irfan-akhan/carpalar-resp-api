import { Request, Response } from "express";
import { signIn } from "../services/auth.service";
import logger from "../utilis/logger";

export async function signInHandler(req: Request, res: Response) {
  try {
    const user = await signIn(req.body);
    return res.status(200).json(user);
  } catch (e: any) {
    logger.fatal(e);
    return res.status(404).send(e.message);
  }
}
