import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} from "../services/user.service";
import logger from "../utilis/logger";

export async function getUsershandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.status(201).json({ users });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {
    await createUser(req.body);
    return res.status(201).send("user created successfully");
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function updateUserHandler(req: Request, res: Response) {
  try {
    const user = await updateUser(req.params.id, req.body);

    return res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    return res.status(404).send(e.message);
  }
}

export async function singleUserhandler(req: Request, res: Response) {
  try {
    const user = await getSingleUser(req.params.id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    return res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    return res.status(404).send(e.message);
  }
}
export async function deleteUserhandler(req: Request, res: Response) {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    return res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    return res.status(404).send(e.message);
  }
}
