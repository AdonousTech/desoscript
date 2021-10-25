export interface ICreateNFTRequestPayload {
    endpoint: string,
    UpdaterPublicKeyBase58Check: string,
    NFTPostHashHex: string,
    NumCopies: number,
    NFTRoyaltyToCreatorBasisPoints: number,
    NFTRoyaltyToCoinBasisPoints: number,
    HasUnlockable: boolean,
    IsForSale: boolean,
    MinBidAmountNanos: number,
    MinFeeRateNanosPerKB: number
}