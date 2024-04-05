import { Request, Response } from "express";
import ClientService from "../services/clientService";

class ClientController {
    static async getClients(_req: Request, res:Response) {
        try {
            const clients = await ClientService.getClients();
            res.json(clients);
        } catch (error) {
            console.error('Error fetching clients: ', error);
            res.status(500).json({message:'Internal server Error'});
        }
    }
    static async addClient(req: Request, res: Response){
        try{
            const {firstName, lastName, cardId, email, phone, partnerBrand} = req.body;
            const newClient = await ClientService.addClient({ firstName, lastName, cardId, email, phone, partnerBrand});
            res.status(201).json(newClient);
        }catch (error) {
            console.error('Error adding client:', error);
            res.status(500).json({ message: 'Internal server Error'});            
        }
    }
}

export default ClientController;