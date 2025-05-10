import { Router } from 'express';
import { EarningController } from '../controllers/admin.controller';

const router = Router();
const earningController = new EarningController();

// Wrap methods in inline functions
router.post("/earnings", (req, res, next) => {
  earningController.addEarnings(req, res).catch(next);
});

router.get('/earnings', (req, res, next) => {
  earningController.getAllEarnings(req, res).catch(next);
});

export default router;
