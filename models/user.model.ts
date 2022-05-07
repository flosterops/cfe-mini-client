export interface ITokens {
    token: string;
    urlToken: string;
}

export interface IUser extends ITokens {
    email: string;
    accountId: number;
}

export type TUser = IUser | null;
