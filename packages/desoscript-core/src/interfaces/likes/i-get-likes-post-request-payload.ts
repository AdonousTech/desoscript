export interface IGetLikesForPostRequestPayload {
    PostHashHex: string;
    Offset: number;
    Limit: number;
    ReaderPublicKeyBase58Check: string
}