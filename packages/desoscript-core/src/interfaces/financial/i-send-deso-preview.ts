export interface ISendDesoPreview {
    endpoint: string,
    SenderPublicKeyBase58Check: string,
    RecipientPublicKeyOrUsername: string,
    AmountNanos: number,
    MinFeeRateNanosPerKB: number
}