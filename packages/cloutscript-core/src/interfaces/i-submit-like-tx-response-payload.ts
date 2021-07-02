export interface ISubmitLikeTxResponsePayload {
    PostEntryResponse: any;
    Transaction: {
        ExtraData: any;
        PublicKey: string;
        Signature: {
            R: number;
            S: number;
        },
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
        };
        TxnTypeJSON: number;
    };
    TxnHashHex: string;
}