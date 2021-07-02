
/**
 * Object shape suitable for requesting a LIKE transaction on BitClout
 * /api/v0/create-like-stateless
 * @export
 * @interface ILikeRequestPayload
 */
export interface ILikeRequestPayload {
    ReaderPublicKeyBase58Check: string,
    LikedPostHashHex: string,
    IsUnlike: boolean,
    MinFeeRateNanosPerKB: number
}