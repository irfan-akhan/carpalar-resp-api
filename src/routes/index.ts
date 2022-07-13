import { Express, Request, Response, NextFunction } from "express";
import { signInHandler } from "../controllers/auth.controller";
import applicationRouter from "./applicationRoutes";
import salesRouter from "./salesRoutes";
import vehicleRouter from "./vehicleRoutes";
import userRouter from "./userRoutes";
import customerRouter from "./customerRoutes";

function routes(APP: Express) {
	APP.get(
		"/healthcheck",
		(req: Request, res: Response, next: NextFunction) => {
			res.sendStatus(200);
		}
	);
	APP.post("/signin", signInHandler);
	APP.use("/api/users", userRouter);
	APP.use("/api/vehicles", vehicleRouter);
	APP.use("/api/applications", applicationRouter);
	APP.use("/api/sales", salesRouter);
	APP.use("/api/customers", customerRouter);
}

export default routes;
