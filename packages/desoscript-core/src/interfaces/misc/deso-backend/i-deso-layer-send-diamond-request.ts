import { ISendDiamondRequestPayload } from "../../diamonds/i-send-diamond-request-payload";

export interface IDesoLayerSendDiamondRequest {
    userSub: string;
    payload: ISendDiamondRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}