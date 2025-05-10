import mongoose, { Schema, Document } from 'mongoose';

export interface IEarning extends Document {
  amountReceived: number;
  orderId: string;
  date: Date;
}

const earningSchema: Schema = new Schema({
  amountReceived: { type: Number, required: true },
  orderId: { type: String, required: true, unique: true },
  paid: { type: Boolean, default:false },
  date: { type: Date, default: Date.now },
});

const Earning = mongoose.model<IEarning>('Earning', earningSchema);

export default Earning;
