export interface IUpdateNFTRequestPayload {
    UpdaterPublicKeyBase58Check: string,
    NFTPostHashHex: string,
    SerialNumber: number,
    IsForSale: boolean,
    MinBidAmountNanos: number,
    MinFeeRateNanosPerKB: number
}