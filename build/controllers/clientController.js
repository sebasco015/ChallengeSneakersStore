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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientService_1 = __importDefault(require("../services/clientService"));
class ClientController {
    static getClients(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield clientService_1.default.getClients();
                res.json(clients);
            }
            catch (error) {
                console.error('Error fetching clients: ', error);
                res.status(500).json({ message: 'Internal server Error' });
            }
        });
    }
    static addClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, cardId, email, phone, partnerBrand } = req.body;
                const newClient = yield clientService_1.default.addClient({ firstName, lastName, cardId, email, phone, partnerBrand });
                res.status(201).json(newClient);
            }
            catch (error) {
                console.error('Error adding client:', error);
                res.status(500).json({ message: 'Internal server Error' });
            }
        });
    }
}
exports.default = ClientController;
