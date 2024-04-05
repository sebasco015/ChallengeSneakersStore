import { Request, Response } from "express";
import ProductService from "../services/productServices";

class ProductController {
    static async getProducts(_req: Request, res:Response) {
        try {
            const products = await ProductService.getProducts();
            res.json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({message:'Internal server Error'}); 
        }
    }
    static async addProduct(req: Request, res: Response){
        try{
            const { name, basePrice, inStock, brand, specialPrice} = req.body;
            const newProduct = await ProductService.addProduct({ name, basePrice, inStock, brand, specialPrice});
            res.status(201).json(newProduct);
        }catch (error) {
            console.error('Error adding product:', error);
            res.status(500).json({ message: 'Internal server Error'});            
        }
    }
    static async getPrice(req:Request, res:Response) {
        try {
            const { clientId, productName } = req.params;
            const specialPrice = await ProductService.getPrice(clientId, productName);            
            if(specialPrice) {
                res.json({price:specialPrice});
            }else {
                res.status(404).json({message: 'Special price not found'});
            }
        } catch (error) {
            console.error('Error fetching special price:', error);
            res.status(500).json({message: 'Internal server Error'})
        }
    }
}

export default ProductController;