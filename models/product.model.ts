import { Category } from './category.model';

export interface Product {
    button: string;
    description: string;
    name: string;
    price: string;
    legal: string;
    rawPrice: string;
    img: string | null;
    currencyType: string;
}

export interface ProductPreview {
    id: string;
    name: string;
    price: string;
    bonus: string;
    currencyType: string;
    img: string;
}

export interface ProductsByCategory extends Category {
    products: ProductPreview[];
}

export interface ProductsByCategoriesList {
    categories: ProductsByCategory[];
}
