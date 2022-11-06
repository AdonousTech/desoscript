export interface IBuyCreatorCoinRequestPayload {
    DeSoToAddNanos: number;
    DeSoToSellNanos: number;
    CreatorCoinToSellNanos: number;
    CreatorPublicKeyBase58Check: string;
    MinDeSoExpectedNanos: number;
    MinCreatorCoinExpectedNanos: number;
    MinFeeRateNanosPerKB: number;
    OperationType: 'buy';
    UpdaterPublicKeyBase58Check: string;
}