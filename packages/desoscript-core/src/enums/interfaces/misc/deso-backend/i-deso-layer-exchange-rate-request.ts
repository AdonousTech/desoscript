import { IExchangeRateRequestPayload } from "../../financial/i-exchange-rate-request-payload";

export interface IDesoLayerExchangeRateRequest {
    userSub: string;
    payload: IExchangeRateRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}