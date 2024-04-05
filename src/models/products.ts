import { Schema, model} from "mongoose";
import { Product } from "../../types";

const productSchema = new Schema({
    name: {type: String, required: true},
    basePrice: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    specialPrice: {type: Number, required:true },
    brand: {type: String, required: true}
});

const ProductModel = model<Product>('Product', productSchema);

export {ProductModel};