export interface IGetRepostsForPostsRequestPayload {
    PostHashHex: string;
    Offset: number;
    Limit: number;
    ReaderPublicKeyBase58Check: string
}