"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    basePrice: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    specialPrice: { type: Number, required: true },
    brand: { type: String, required: true }
});
const ProductModel = (0, mongoose_1.model)('Product', productSchema);
exports.ProductModel = ProductModel;
