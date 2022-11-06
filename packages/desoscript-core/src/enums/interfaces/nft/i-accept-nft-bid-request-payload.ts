export interface IAcceptNFTBidRequestPayload {
    UpdaterPublicKeyBase58Check: string,
    NFTPostHashHex: string,
    SerialNumber: number,
    BidderPublicKeyBase58Check: string,
    BidAmountNanos: number,
    UnencryptedUnlockableText: string,
    MinFeeRateNanosPerKB: number
}