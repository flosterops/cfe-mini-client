import { PaymentCartTypes } from 'widgets/AccountLayout/AccountPayments/NewPayment';
import { CurrencyTypes } from './currency.model';

export interface IAccountAttrModel {
    // TODO add locale types 'en-EN' and etc.
    locale: string;
}

export interface IAccountModel {
    accountCurrency: CurrencyTypes;
    accountEntitlements: string;
    accountId: number;
    accountModifiedData: string;
    // TODO add account status TYPES
    accountStatus: string;
    attr: IAccountAttrModel;
    email: string;
    limited: boolean;
    linked: boolean;
}

export interface AccountBalance {
    binary: number;
    glyph: number;
}

export interface SecretQuestionModel {
    question: string;
    answer: string;
}

export interface AccountLinkGameModel {
    id: string;
    label: string;
    status: boolean;
}

export interface IAccountInfoModel {
    email: string;
    glyphTag: string;
    balance: AccountBalance;
    secretQuestionFirst: SecretQuestionModel;
    secretQuestionSecond: SecretQuestionModel;
    mobileAuthKey: string;
    securityStatus: number;
    emailVerified: boolean;
    linkedGames: AccountLinkGameModel;
    favoriteChannels: string[];
}

export interface ISubProduct {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface IAccountLinks {
    id: string;
    img: string;
    platform: string;
    status: boolean;
}

export interface IApplyCodeTransactions {
    id: string;
    date: string;
    game: string;
    name: string;
}

export interface IAccountPaymentModel {
    id: string;
    via: string;
    card: string;
    type: PaymentCartTypes;
    default: boolean;
}

export interface IAccountPaymentTransactionsModel {
    id: string;
    order: string;
    date: string;
    game: string;
    transactionType: string;
    product: string;
    price: number;
    card: string;
    subProducts: ISubProduct[];
}

export interface IThirdPartyAccountModel {
    thirdPartyAccount: string;
}
