import express from 'express';
import ClientController from '../controllers/clientController';

const router = express.Router();

router.get('/', ClientController.getClients);
router.post('/',ClientController.addClient);

export default router;