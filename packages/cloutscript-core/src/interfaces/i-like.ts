export interface IBitcloutLike {
    ReaderPublicKeyBase58Check: string,
    LikedPostHashHex: string,
    IsUnlike: boolean,
    MinFeeRateNanosPerKB: number
}