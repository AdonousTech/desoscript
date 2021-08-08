import { ISendDiamondRequestPayload } from "../../diamonds/i-send-diamond-request-payload";

export interface ICloutLayerSendDiamondRequest {
    userSub: string;
    payload: ISendDiamondRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}