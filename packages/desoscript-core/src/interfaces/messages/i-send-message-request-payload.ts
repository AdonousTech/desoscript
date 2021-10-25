export interface ISendMessageRequestPayload {
    endpoint: string,
    SenderPublicKeyBase58Check: string,
    RecipientPublicKeyBase58Check: string,
    MessageText: string,
    MinFeeRateNanosPerKB: number
}