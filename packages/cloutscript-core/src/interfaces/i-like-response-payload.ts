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