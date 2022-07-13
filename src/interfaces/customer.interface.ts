import mongoose from "mongoose";

interface customerInterface extends mongoose.Document {
	firstName: string;
	lastName: string;
	title: string;
	email: string;
	mobile: number;
	password: string;
	gender: string;
	status: string;
	dob: Date;
	address: {
		street: string;
		area: string;
		country: string;
		state: string;
		postalCode: string;
	};
	createdAt: Date;
	updatedAt: Date;
	comparePassword(candidatePassword: string): Promise<boolean>;
}
export default customerInterface;
