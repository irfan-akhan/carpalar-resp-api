import { model, Schema } from "mongoose";
import { vehicleInterface } from "../interfaces/vehicle.interface";

const VehicleSchema = new Schema(
	{
		title: String,
		tag_line: String,
		description: String,
		banner: String,
		images: [{ type: String }],
		reviews: [{ type: String }],
		colors: [{ type: String }],
		make: String,
		model: String,
		fuel_type: String,
		mileage: Number,
		doors: Number,
		vehicle_type: {
			type: String,
			Enum: ["tri-cycle", "mini-bus", "suv", "saloon"],
		},
		total_cost: Number,
		down_payment: Number,
		weekly_payment: Number,
		passengers: Number,
		sold_count: Number,
		manufacturing_year: Date,
		horsepower: String,
		status: {
			type: String,
			default: "deActive",
			enum: ["deActive", "active"],
		},
		fm: { type: String, default: "false" },
		air_condition: { type: String, default: "false" },
		audio_input: { type: String, default: "false" },
		fog_lights: { type: String, default: "false" },
	},
	{ timestamps: true }
);

const VehicleModel = model<vehicleInterface>("Vehicle", VehicleSchema);

export default VehicleModel;
