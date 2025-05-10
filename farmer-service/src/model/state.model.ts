// models/State.ts
import mongoose from "mongoose";

const DistrictSchema = new mongoose.Schema({
  name: String,
});

const StateSchema = new mongoose.Schema({
  name: String,
  districts: [DistrictSchema],
});

export default mongoose.model("State", StateSchema);
