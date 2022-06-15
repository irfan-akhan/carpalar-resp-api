import express from "express";
import morgan from "morgan";
import config from "config";
import connect from "./utilis/db";
import logger from "./utilis/logger";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
const PORT = config.get<number>("port");

app.listen(4000, () => {
  logger.info(`server listening on http://localhost:${PORT}`);
  connect();
  routes(app);
});
