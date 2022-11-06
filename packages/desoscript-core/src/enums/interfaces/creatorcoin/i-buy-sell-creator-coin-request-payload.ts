export interface IBuyOrSellCreatorCoinRequestPayload {
    UpdaterPublicKeyBase58Check: string;
    CreatorPublicKeyBase58Check: string;
    OperationType: string;
    DeSoToSellNanos: number;
    CreatorCoinToSellNanos: number;
    DeSoToAddNanos: number;
    MinDeSoExpectedNanos: number;
    MinCreatorCoinExpectedNanos: number;
    MinFeeRateNanosPerKB: number;
    // If we are not broadcasting the transaction; InTutorial should always be false so we don't update the TutorialStatus of the user.
    InTutorial: false;
}