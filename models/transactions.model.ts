import { IBaseStatusResponse } from './request.model';

export interface IGetTransactionsBody {
    channelCode: string;
    fromDate: string;
    includeRealMoney: boolean;
    includeVoucher: boolean;
    language: string;
    maxSize: number;
    toDate: string;
}

export interface ITransactionItemResponses {
    accountId: number;
    actualPricePaid: number;
    channelCode: string;
    channelId: number;
    countryCode: string;
    failureReason: string;
    orderDate: string;
    orderId: number;
    status: string;
}

export interface IGetTransactionsResponse extends IBaseStatusResponse {
    transactionItemResponses: ITransactionItemResponses[];
}

export type TGetTransactionsResponse = IGetTransactionsResponse | null;
