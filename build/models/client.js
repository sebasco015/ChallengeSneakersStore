"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cardId: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    partnerBrand: { type: Array, default: [] }
});
const ClientModel = (0, mongoose_1.model)('Client', clientSchema);
exports.ClientModel = ClientModel;
