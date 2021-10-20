export interface IBuyCreatorCoinRequestPayload {
    BitCloutToAddNanos: number;
    BitCloutToSellNanos: number;
    CreatorCoinToSellNanos: number;
    CreatorPublicKeyBase58Check: string;
    MinBitCloutExpectedNanos: number;
    MinCreatorCoinExpectedNanos: number;
    MinFeeRateNanosPerKB: number;
    OperationType: 'buy';
    UpdaterPublicKeyBase58Check: string;
}