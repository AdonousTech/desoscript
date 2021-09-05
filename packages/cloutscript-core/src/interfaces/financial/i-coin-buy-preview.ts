import { IGetSingleProfileResponsePayload } from "../users/i-get-single-profile-response-payload";

export interface ICoinBuyPreview {
    Buyer: IGetSingleProfileResponsePayload,
    Seller: IGetSingleProfileResponsePayload,
    BitCloutToSellNanos: number
}