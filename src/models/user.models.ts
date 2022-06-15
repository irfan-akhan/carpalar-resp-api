import { Schema, model } from "mongoose";
import userInterface from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import config from "config";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user",
      enum: ["user", "blogger", "admin", "superUser"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  let user = this as userInterface;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const docToUpdate = await this.model.findOne(this.getQuery());
  console.log("uuuuuu> ", docToUpdate);
  console.log("rrrrrrr> ", this);
  return next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as userInterface;
  return bcrypt
    .compare(candidatePassword, user.password)
    .catch((err: any) => false);
};
const UserModel = model("User", UserSchema);
export default UserModel;
