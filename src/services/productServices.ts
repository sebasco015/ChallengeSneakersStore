import { Product } from "../../types";
import { ClientModel } from "../models/client";
import { ProductModel } from "../models/products";

class ProductService {
    static async getProducts() {
      try {  
        return await ProductModel.find({ inStock: true });
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

    }

    static async addProduct(newProduct: Product){
        try {
            const product = new ProductModel(newProduct);
            await product.save();
            return product;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }

    static async getPrice(clientId: string, productName:string){
        try {
            const client = await ClientModel.findById(clientId);
            const priceSpecial = await ProductModel.findOne({name: productName})         
            let price: number | undefined;
            if( client && priceSpecial ){
                const brandMatch = client.partnerBrand.find(brand => brand === priceSpecial.brand);

                if (brandMatch) {
                    console.log('Special Price:', priceSpecial?.specialPrice);
                    price = priceSpecial?.specialPrice;
                } else {
                    console.log('Base Price:', priceSpecial?.basePrice);
                    price = priceSpecial?.basePrice;
                }   
            }
            return price;
        } catch (error) {
            console.error('Error fetching price special: ',error);
            throw error;            
        }
    }
    
  }
  
  export default ProductService;