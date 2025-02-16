import express from 'express'
import { deploy } from '../controllers/deploy';

const router = express.Router();

router.post("/deploy",deploy);
export default router;