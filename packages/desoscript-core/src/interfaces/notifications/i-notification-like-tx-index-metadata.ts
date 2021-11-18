export interface INotificationLikeTxIndexMetadata {
    BlockHashHex?: string;
    TxnIndexInBlock?: number;
    TxnType?: "LIKE";
    TransactorPublicKeyBase58Check?: string;
    AffectedPublicKeys?: [{PublicKeyBase58Check: string; Metadata: string;}];
    TxnOutputs?: [
        {PublicKey: string;  AmountNanos: number; }
    ],
    BasicTransferTxindexMetadata?: {
        TotalInputNanos: number;
        TotalOutputNanos: number;
        FeeNanos: number;
        UtxoOpsDump: any;
        UtxoOps: any; // reserved
    },
    LikeTxindexMetadata?: {
        IsUnlike: boolean;
        PostHashHex: string;
    }
}