import { Document } from "mongoose";

export interface vehicleInterface extends Document {
  title: string;
  tag_line: string;
  description: string;
  poster: string;
  images: Array<string>;
  reviews: Array<string>;
  manufacturing_year: number;
  sold_count: number;
  make: string;
  model: string;
  vehicle_type: string;
  payment_status: string;
  fuel_type: string;
  mileage: string;
  horsepower: string;
  colors: Array<string>;
  doors: number;
  passengers: number;
  down_payment: number;
  total_cost: number;
  weekly_payment: number;
  air_condition: boolean;
  fm: boolean;
  audio_input: boolean;
  fog_lights: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
