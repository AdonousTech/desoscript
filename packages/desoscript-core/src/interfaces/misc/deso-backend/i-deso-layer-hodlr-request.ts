import { IHodlrRequestPayload } from "../../financial/i-hodlr-request-payload";

export interface IDesoLayerHodlrRequest {
    userSub: string;
    payload: IHodlrRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}