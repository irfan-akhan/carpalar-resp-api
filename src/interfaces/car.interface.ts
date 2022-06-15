import { Document } from "mongoose";

export interface carInterface extends Document {
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
  fuel_type: string;
  mileage: string;
  horsepower: string;
  colors: Array<string>;
  total_cost: number;
  doors: number;
  passengers: number;
  down_payment: number;
  weekly_payment: number;
  air_condition: boolean;
  fm: boolean;
  audio_input: boolean;
  fog_lights: boolean;
  createdAt: Date;
  updatedAt: Date;
}
