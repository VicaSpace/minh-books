import { Request, Response } from 'express';
import { seedData } from '../services/seed';

/**
 * Handler for seeding author data
 * @param _req Request
 * @param res Response
 */
export const seedDataHandler = async (_req: Request, res: Response) => {
  await seedData();
  res.status(201).json({
    message: 'Seed data successfully',
  });
};
