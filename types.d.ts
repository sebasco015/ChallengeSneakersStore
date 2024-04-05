export interface Product {
    name: string;
    basePrice: number;
    inStock: boolean;
    brand: string;
    specialPrice: number;
}

export interface Client {
    firstName: string;
    lastName: string;
    cardId: number;
    email: string;
    phone: number;
    partnerBrand: array[];
}
