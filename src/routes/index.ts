import { Express, Request, Response, NextFunction } from "express";
import { signInHandler } from "../controllers/auth.controller";
import carRouter from "./carRoutes";
import userRouter from "./userRoutes";

function routes(APP: Express) {
  APP.get("/healthcheck", (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200);
  });
  APP.post("/signin", signInHandler);
  APP.use("/api/users", userRouter);
  APP.use("/api/cars", carRouter);
}

export default routes;
