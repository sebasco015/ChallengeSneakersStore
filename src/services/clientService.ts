import { Client } from "../../types";
import { ClientModel } from "../models/client";

class ClientService {
    static async getClients() {
        try {
            return await ClientModel.find();
        }catch (error) {
            console.error('Error fetching clients:', error);
            throw error;
        }
    }
    static async addClient(newClient: Client){
        try {
            const client = new ClientModel(newClient);
            await client.save();
            return client;
        } catch (error) {
            console.error('Error adding client: ', error);
            throw error;
            
        }
    }
}

export default ClientService;