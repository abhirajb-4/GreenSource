import Earning from '../models/admin.model';
import { IEarning } from '../models/admin.model';

export class EarningService {
  async addEarning(amountReceived: number, orderId: string, date: Date): Promise<IEarning> {
    const earning = new Earning({ amountReceived, orderId, date });
    await earning.save();
    return earning;
  }

  async getAllEarnings(): Promise<IEarning[]> {
    return await Earning.find();
  }
}


