import { Document } from "mongoose";
interface gurantorInterface {
	first_name: string;
	last_name: string;
	title: string;
	phone: number;
	job_title: number;
	email: string;
	relationship: string;
}
export interface applicationInterface extends Document {
	title: string;
	first_name: string;
	last_name: string;
	marital_status: string;
	gender: string;
	phone: number;
	experience: number;
	nationality: string;
	address: string;
	qualification: string;
	alternate_phone: string;
	state: string;
	lga: string;
	email: string;
	license: string;
	dob: Date;
	applied_car_name: string;
	applied_car_id: string;
	birth_place: string;
	driving_for: string;
	gurantors: [gurantorInterface, gurantorInterface];
	status: string;
	token: string;
	thirdPartyStatus: string;
	updateThirdPartyStatus?: string;
	guarantorVerified1: boolean;
	guarantorVerified2: boolean;

	createdAt: Date;
	updatedAt: Date;
}
