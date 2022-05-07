export interface IErrorBase {
    code: number;
    message: string | null;
}

export type TError = IErrorBase | null;
