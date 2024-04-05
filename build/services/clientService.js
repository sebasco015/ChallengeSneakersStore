"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../models/client");
class ClientService {
    static getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield client_1.ClientModel.find();
            }
            catch (error) {
                console.error('Error fetching clients:', error);
                throw error;
            }
        });
    }
    static addClient(newClient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = new client_1.ClientModel(newClient);
                yield client.save();
                return client;
            }
            catch (error) {
                console.error('Error adding client: ', error);
                throw error;
            }
        });
    }
}
exports.default = ClientService;
