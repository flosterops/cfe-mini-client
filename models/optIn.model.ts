export interface ISetAccountOptInRequest {
    channel: string;
    decision: boolean;
}

export interface ISetOptInRequestBody {
    setAccountOptInRequest: ISetAccountOptInRequest;
}
