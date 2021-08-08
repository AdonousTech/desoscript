export interface ICloutSendDiamondResponsePayload {
    ChangeAmountNanos?: number;
    FeeNanos?: number;
    SpendAmountNanos?: number;
    TotalInputNanos?: number;
    Transaction?: {
        ExtraData: {
            DiamondLevel: any; // should be number, but showing weird string char
            DiamondPostHash: string
        },
        PublicKey: string
        Signature: null;
        TxInputs: any[];
        TxOutputs: any;
        TxnMeta: {
            CreatorCoinToTransferNanos: number;
            ProfilePublicKey: string;
            ReceiverPublicKey: string;
        }
        TxnTypeJSON: number;
    };
    TransactionHex?: string;
    TxnHashHex?: string;
}
