import { Schema, model } from "mongoose";
import CustomerInterface from "../interfaces/customer.interface";
import bcrypt from "bcrypt";
import config from "config";

const AddressSchema = {
	street: { type: String },
	area: { type: String },
	country: { type: String },
	state: { type: String },
	postalCode: { type: String },
};

const CustomerSchema = new Schema(
	{
		gender: { type: String, enum: ["male", "female"] },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		title: { type: String, required: true },
		mobile: { type: Number, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		dob: Date,
		status: {
			type: String,
			default: "active",
			enum: ["active", "blocked"],
		},
		address: { type: AddressSchema },
	},
	{ timestamps: true }
);

CustomerSchema.pre("save", async function (next) {
	let customer = this as CustomerInterface;
	if (!customer.isModified("password")) {
		return next();
	}
	const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
	const hash = bcrypt.hashSync(customer.password, salt);
	customer.password = hash;
	return next();
});

CustomerSchema.pre("findOneAndUpdate", async function (next) {
	const docToUpdate = await this.model.findOne(this.getQuery());
	console.log("uuuuuu> ", docToUpdate);
	console.log("rrrrrrr> ", this);
	return next();
});

CustomerSchema.methods.comparePassword = async function (
	candidatePassword: string
): Promise<boolean> {
	const customer = this as CustomerInterface;
	return bcrypt
		.compare(candidatePassword, customer.password)
		.catch((err: any) => false);
};
const CustomerModel = model("Customer", CustomerSchema);
export default CustomerModel;
