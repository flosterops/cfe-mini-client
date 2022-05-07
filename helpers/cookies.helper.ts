import Cookies from 'js-cookie';
import { ITokens } from 'models/user.model';

export const setCookieToken = (token: string, urlToken: string): void => {
    Cookies.set('token', token);
    Cookies.set('urlToken', urlToken);
};
export const removeCookieToken = (): void => {
    Cookies.remove('token');
    Cookies.remove('urlToken');
};
export const getCookieToken = (): ITokens => {
    const token = Cookies.get('token') ?? '';
    const urlToken = Cookies.get('urlToken') ?? '';
    return { token, urlToken };
};
export const setCookieAccountId = (accountId: number): string | undefined =>
    Cookies.set('accountId', String(accountId));
export const removeCookieAccountId = (): void => Cookies.remove('accountId');
export const getCookieAccountId = (): number => Number(Cookies.get('accountId')) ?? 0;
