import Express from "express";
import {
  createUserHandler,
  getUsershandler,
  updateUserHandler,
  deleteUserhandler,
  singleUserhandler,
} from "../controllers/user.controller";
const userRouter = Express.Router();

userRouter.route("/").get(getUsershandler).post(createUserHandler);
userRouter
  .route("/:id")
  .patch(updateUserHandler)
  .get(singleUserhandler)
  .delete(deleteUserhandler);

export default userRouter;
