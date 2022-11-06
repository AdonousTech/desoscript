export interface IGetDiamondsForPostRequestPayload {
    PostHashHex: string;
    Offset: number;
    Limit: number;
    ReaderPublicKeyBase58Check: string
}