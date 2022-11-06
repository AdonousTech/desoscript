export interface ICreateNFTBidRequestPayload {
    UpdaterPublicKeyBase58Check: string,
    NFTPostHashHex: string,
    SerialNumber: number,
    BidAmountNanos: number,
    MinFeeRateNanosPerKB: number
}