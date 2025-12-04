import { Router } from 'express';
import { handleRewrite } from '../controllers/rewriteController.js';

const router = Router();

router.post('/rewrite', handleRewrite);

export default router;
