"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const priceRoutes_1 = __importDefault(require("./routes/priceRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dotenv_1.config)();
const PORT = process.env.PORT;
(0, config_1.default)();
app.use(express_1.default.json());
app.use('/products', productRoutes_1.default);
app.use('/clients', clientRoutes_1.default);
app.use('/price', priceRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
