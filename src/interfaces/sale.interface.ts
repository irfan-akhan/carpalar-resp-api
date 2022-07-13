import { Document } from "mongoose";

export interface SaleInterface extends Document {
	customer: string;
	vehicle: string;
	type: string;
	total_amount: string;
	paid_amount: string;
	installment_amount: string;
	total_transactions: number;
	paid_transactions: number;
	pending_transactions: number;
	upfront_fee: number;
	upfront_fee_paid: boolean;
	createAt: Date;
	updatedAt: Date;
	payments: [];
	status: string;
}
