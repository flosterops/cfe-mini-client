import { AxiosResponse } from 'axios';

export interface IBaseResponse<T> extends AxiosResponse<IBaseStatusResponse & T> {}

export interface IBaseStatusResponse {
    success: boolean;
    errorCode: number;
    errorMessage: string | null;
}

export type TBaseResponse<T> = IBaseStatusResponse & T;
