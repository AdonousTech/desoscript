
/**
 * Response object shape of LIKE transaction request on BitClout
 * /api/v0/create-like-stateless
 * @export
 * @interface ILikeResponsePayload
 */
export interface ILikeResponsePayload {
    TotalInputNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    Transaction: {
        TxInputs: {[key: number]: {
            Index: number;
            TxID: number[];
        }};
        TxOutputs: {[key: number]: {
            AmountNanos: number;
            PublicKey: string;
        }};
        TxnMeta: {
            LikedPostHash: number[];
            IsUnlike: boolean;
        },
        PublicKey: string;
        ExtraData: any;
        Signature: string;
        TxnTypeJSON: number;
    },
    TransactionHex: string;
}