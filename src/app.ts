import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "config";
import connect from "./utilis/db";
import logger from "./utilis/logger";
import routes from "./routes";
import bodyParser from "body-parser";
// import paystackInstance from "./utilis/payStack";

const app = express();
if (process.env.NODE_ENV !== "production") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = config.get<number>("port");
// console.log("call start");
// paystackInstance.transactions
// 	.list({ perPage: 20 })
// 	.then(function (err: any, resp: any) {
// 		console.log("err", err);
// 		console.log("resp", resp);
// 	});
// console.log("call ended");
app.listen(4000, () => {
	logger.info(`server listening on http://localhost:${PORT}`);
	connect();
	routes(app);
});
