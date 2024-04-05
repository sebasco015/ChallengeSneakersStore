"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientController_1 = __importDefault(require("../controllers/clientController"));
const router = express_1.default.Router();
router.get('/', clientController_1.default.getClients);
router.post('/', clientController_1.default.addClient);
exports.default = router;
