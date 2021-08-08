import { IHodlrRequestPayload } from "../../financial/i-hodlr-request-payload";

export interface ICloutLayerHodlrRequest {
    userSub: string;
    payload: IHodlrRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}