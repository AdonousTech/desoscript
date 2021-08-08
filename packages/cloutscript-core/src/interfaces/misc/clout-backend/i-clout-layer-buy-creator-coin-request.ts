import { IBuyCreatorCoinRequestPayload } from "../../creatorcoin/i-buy-creator-coin-request-payload";

export interface ICloutLayerBuyCreatorCoinRequest {
    userSub: string;
    payload: IBuyCreatorCoinRequestPayload;
    instruction?: string;
    bypassLogger?: boolean;
}