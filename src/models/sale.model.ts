import { Schema, model } from "mongoose";
import { SaleInterface } from "../interfaces/sale.interface";

const paymentDetails = {
	date: String,
	id: String,
	amount: String,
};

const SaleSchema = new Schema(
	{
		customer: {
			type: Schema.Types.ObjectId,
			ref: "Customer",
			required: true,
		},
		vehicle: {
			type: Schema.Types.ObjectId,
			ref: "Vehicle",
			required: true,
		},
		payments: [paymentDetails],
		type: { type: String, enum: ["buy-out", "finance"], required: true },
		total_amount: { type: String, trim: true },
		paid_amount: { type: String, trim: true },
		installment_amount: { type: String, trim: true },
		total_transactions: { type: Number },
		paid_transactions: { type: Number },
		pending_transactions: { type: Number },
		upfront_fee: { type: Number },
	},
	{ timestamps: true }
);

const SaleModel = model<SaleInterface>("Sale", SaleSchema);
export default SaleModel;
