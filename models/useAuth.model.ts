import { TUser } from './user.model';
import { TError } from './error.model';
import { UrlObject } from 'url';
import { TLoginResponse } from './authorization.model';

export interface IUseAuthProvider {
    user: TUser;
    login: TUseAuthLogin;
    register: TUseAuthRegister;
    logout: TUseAuthLogout;
    validateToken: TUseAuthValidateToken;
    routerPush: TUseAuthRouterPush;
    getAuthError: TUseAuthGetAuthError;
}

export type TUseAuthLogin = (username: string, password: string, channelId: number) => Promise<TLoginResponse>;
export type TUseAuthLogout = () => null;
export type TUseAuthValidateToken = (stopLoader: boolean) => Promise<boolean>;
export type TUseAuthRouterPush = (href: LinkUrl, as?: string) => void;
export type TUseAuthRegister = (
    email: string,
    password: string,
    channelId: number,
    dob: Date
) => Promise<TError | null>;
export type TUseAuthGetAuthError = () => TError;

export type LinkUrl = UrlObject | string;
