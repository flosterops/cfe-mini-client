import { IBaseStatusResponse } from './request.model';

export interface IWallet {
    credits: IWalletCredits[];
    points: IWalletPoints[];
}

export interface IWalletCredits {
    experationDate: string;
}

export interface IWalletPoints extends IWalletCredits {}

export type TWalletRequestResponse = IBaseStatusResponse & IWallet;
