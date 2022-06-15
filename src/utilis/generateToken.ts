import Jwt from "jsonwebtoken";
import config from "config";
import userInterface from "../interfaces/user.interface";

export async function generateToken(user: userInterface) {
  const token = Jwt.sign(
    {
      email: user.email,
      _id: user._id,
      name: user.name,
      date: user.createdAt,
    },
    config.get("jwtSecretKey"),
    { expiresIn: config.get("jwtExpiresIn") }
  );
  return token;
}
