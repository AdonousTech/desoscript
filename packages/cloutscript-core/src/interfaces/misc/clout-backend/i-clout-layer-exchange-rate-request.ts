import { IExchangeRateRequestPayload } from "../../financial/i-exchange-rate-request-payload";

export interface ICloutLayerExchangeRateRequest {
    userSub: string;
    payload: IExchangeRateRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}