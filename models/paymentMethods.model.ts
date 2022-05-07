import { IBaseStatusResponse } from './request.model';

export interface IPaymentMethod {
    accountId: number;
    banned: boolean;
    cooldownDate: string;
    expired: boolean;
    fields: Record<string, string>;
    kind: string;
    markedForDeletion: boolean;
    maskedCardNumber: string;
    paymentMethodId: number;
    retained: boolean;
    verified: boolean;
    version: number;
}

export interface IStoredPaymentMethodsResponse extends IBaseStatusResponse {
    accountId: number;
    paymentMethods: IPaymentMethod[];
    primaryPaymentMethod: IPaymentMethod[];
}

export interface INewPaymentMethodResponse extends IBaseStatusResponse {
    newPaymentMethod: number;
}
