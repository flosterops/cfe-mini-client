import { TError } from './error.model';
import { TBaseResponse } from './request.model';

export interface IUserData {
    email: string;
    accountId: number;
}

export interface ILoginResponse extends IUserData {
    token: string;
    urlToken: string;
}

export interface ILoginBase extends ILoginResponse {
    error: TError;
}

export type TLoginBaseResponse = TBaseResponse<ILoginResponse>;
export type TLoginRequestBaseResponse = TLoginBaseResponse | null;
export type TLoginResponse = ILoginBase | null;

export interface IRegisterResponse extends ILoginResponse {
    glyphTag: string;
    glyphTagNumeric: string;
}

export type TRegisterResponse = TBaseResponse<IRegisterResponse>;
export type TRegisterRequestBaseResponse = TRegisterResponse;
export type TMeRequestBaseResponse = TRegisterResponse | null;
