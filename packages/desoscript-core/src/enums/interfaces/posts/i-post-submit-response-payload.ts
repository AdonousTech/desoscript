export interface IPostSubmitResponsePayload {
    TstampNanos: number;
    TransactionHex: string;
    PostHashHex: string;
    TotalInputNanos: number;
    ChangeAmountNanos: number;
    FeeNanos: number;
    Transaction: {   
        ExtraData: any | undefined | null;
        PublicKey: string;
        Signature: any | undefined | null;
        TxInputs: any | undefined | null;
        TxOutputs: any | undefined | null;
        TxnMeta: {
            Body: string;
            CreatorBasisPoints: number;
            IsHidden: boolean;
            ParentStakeID: any | undefined | null;
            PostHashToModify: any | undefined | null;
            StakeMultipleBasisPoints: number;
            TimestampNanos: number
        },
        TxnTypeJSON: number
    }
}