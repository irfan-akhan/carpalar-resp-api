import { Schema, model } from "mongoose";
import { applicationInterface } from "../interfaces/application.interface";

const ApplicationSchema = new Schema(
	{
		title: String,
		first_name: String,
		last_name: String,
		marital_status: String,
		gender: String,
		phone: Number,
		experience: Number,
		nationality: String,
		address: String,
		qualification: String,
		alternate_phone: String,
		state: String,
		lga: String,
		email: String,
		license: String,
		dob: Date,
		applied_car_id: {
			type: Schema.Types.ObjectId,
			ref: "Vehicle",
			required: true,
		},
		applied_car_name: String,
		birth_place: String,
		driving_for: String,
		payment_status: {
			type: String,
			default: "Pending",
			enum: ["Pending", "Done"],
		},
		status: {
			type: String,
			default: "Pending",
			enum: ["Pending", "Processing", "Verified", "Rejected"],
		},
		guarantors: [{}],
		token: { type: String, required: true },
		guarantorVerified1: {
			type: Boolean,
			default: false,
		},
		guarantorVerified2: {
			type: Boolean,
			default: false,
		},
		thirdPartyStatus: {
			type: String,
			default: "pending",
			enum: ["pending", "failed", "sent", "verified", "rejected"],
		},
	},
	{ timestamps: true }
);

const ApplicationModel = model<applicationInterface>(
	"Application",
	ApplicationSchema
);
export default ApplicationModel;
