import { Request, Response } from 'express';
import {EarningService }from '../services/service';

export class EarningController {
  private earningService: EarningService;
  constructor() {
    this.earningService = new EarningService();
  }

  async addEarnings(req: Request, res: Response): Promise<Response> {
    try {
      const { amountReceived, orderId, date } = req.body;
      const earning = await this.earningService.addEarning(amountReceived, orderId, date);
      return res.status(201).json({ message: 'Earning added successfully', earning });
    } catch (error) {
      return res.status(500).json({ message: 'Error adding earning', error });
    }
  }

  async getAllEarnings(req: Request, res: Response): Promise<Response> {
    try {
      const earnings = await this.earningService.getAllEarnings();
      return res.status(200).json(earnings);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching earnings', error });
    }
  }
}


