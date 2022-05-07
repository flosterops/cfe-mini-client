export interface INewEmailBody {
    accountId: number;
    newEmail: string;
    password: string;
    platformChannelId: number;
}

export interface INewEmailRequestBody {
    newEmailRequest: INewEmailBody;
}
