import { IGetSingleProfileResponsePayload } from "../users/i-get-single-profile-response-payload";

export interface ICoinBuyPreview {
    Buyer: IGetSingleProfileResponsePayload,
    Seller: IGetSingleProfileResponsePayload,
    ChangeAmountNanos: number;
    ExpectedBitCloutReturnedNanos: number;
    ExpectedCreatorCoinReturnedNanos: number;
    FeeNanos: number;
    FounderRewardGeneratedNanos: number;
    SpendAmountNanos: number;
    TotalInputNanos: number;
    Transaction: any;
    TransactionHex: string;
    
}