import { TError } from 'models/error.model';

export const setErrorByErrorData = (code: number, message: string | null): TError => {
    return { code, message };
};
