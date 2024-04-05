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
const products_1 = require("../models/products");
class ProductService {
    static getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield products_1.ProductModel.find({ inStock: true });
            }
            catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        });
    }
    static addProduct(newProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = new products_1.ProductModel(newProduct);
                yield product.save();
                return product;
            }
            catch (error) {
                console.error('Error adding product:', error);
                throw error;
            }
        });
    }
    static getPrice(clientId, productName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield client_1.ClientModel.findById(clientId);
                const priceSpecial = yield products_1.ProductModel.findOne({ name: productName });
                let price;
                if (client && priceSpecial) {
                    const brandMatch = client.partnerBrand.find(brand => brand === priceSpecial.brand);
                    if (brandMatch) {
                        console.log('Special Price:', priceSpecial === null || priceSpecial === void 0 ? void 0 : priceSpecial.specialPrice);
                        price = priceSpecial === null || priceSpecial === void 0 ? void 0 : priceSpecial.specialPrice;
                    }
                    else {
                        console.log('Base Price:', priceSpecial === null || priceSpecial === void 0 ? void 0 : priceSpecial.basePrice);
                        price = priceSpecial === null || priceSpecial === void 0 ? void 0 : priceSpecial.basePrice;
                    }
                }
                return price;
            }
            catch (error) {
                console.error('Error fetching price special: ', error);
                throw error;
            }
        });
    }
}
exports.default = ProductService;
