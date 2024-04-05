"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./db/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
(0, config_1.connect)();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
