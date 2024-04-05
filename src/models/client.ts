import {Schema, model} from "mongoose";
import { Client } from "../../types";

const clientSchema = new Schema ({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    cardId: { type: Number, required: true},
    email: { type: String, required:true},
    phone: { type: Number, required: true},
    partnerBrand:{ type: Array, default: []}
});

const ClientModel = model<Client>('Client', clientSchema);

export { ClientModel }