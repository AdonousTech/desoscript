import { IBuyCreatorCoinRequestPayload } from "../../creatorcoin/i-buy-creator-coin-request-payload";

export interface IDesoLayerBuyCreatorCoinRequest {
    userSub: string;
    payload: IBuyCreatorCoinRequestPayload;
    instruction?: string;
    bypassLogger?: boolean;
}