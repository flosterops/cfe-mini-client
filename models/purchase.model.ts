export enum PurchaseType {
    buyNow,
    cart,
    fastBuy,
}

export interface IPurchaseItem {
    productId: string;
    quantity: number;
    // TODO add currency code types
    currencyCode: string;
}

export interface ISummaryItem {
    id: number;
    name: string;
    quantity: number;
    price: string;
    currencyType: string;
    img: string;
}

export interface PaymentMethod {
    id: string;
    name: string;
}

export interface SelectedMethod {
    id: string;
    name: string;
}
