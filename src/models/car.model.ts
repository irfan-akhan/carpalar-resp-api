import { model, Schema } from "mongoose";
import { carInterface } from "../interfaces/car.interface";

const CarSchema = new Schema(
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
    total_cost: Number,
    down_payment: Number,
    weekly_payment: Number,
    passengers: Number,
    sold_count: Number,
    manufacturing_year: Number,
    horsepower: String,
    fm: { type: Boolean, default: false },
    air_condition: { type: Boolean, default: false },
    audio_input: { type: Boolean, default: false },
    fog_lights: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const CarModel = model<carInterface>("Car", CarSchema);

export default CarModel;
