import mongoose from "mongoose";

interface userInterface extends mongoose.Document {
	name: string;
	email: string;
	password: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
	comparePassword(candidatePassword: string): Promise<boolean>;
}
export default userInterface;
