export interface ICreateLikeRequestPayload {
    ReaderPublicKeyBase58Check: string;
    LikedPostHashHex: string;
    IsUnlike: boolean;
    MinFeeRateNanosPerKB: number
}