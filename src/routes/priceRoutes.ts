import express from 'express';
import ProductController from '../controllers/productController';

const router = express.Router();

router.get('/:clientId/:productName',ProductController.getPrice);

export default router;