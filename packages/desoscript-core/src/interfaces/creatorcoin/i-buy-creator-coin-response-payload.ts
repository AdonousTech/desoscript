export interface IBuyCreatorCoinResponsePayload {
    ChangeAmountNanos: number;
    ExpectedBitCloutReturnedNanos: number;
    ExpectedCreatorCoinReturnedNanos: number;
    FeeNanos: number;
    FounderRewardGeneratedNanos: number;
    SpendAmountNanos: number;
    TotalInputNanos: number;
    Transaction: any;
    TransactionHex: string;
    TxnHashHex: string;
}