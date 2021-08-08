export interface IGetSinglePostRequestPayload {
    AddGlobalFeedBool: boolean;
    CommentLimit: number;
    CommentOffset: number;
    FetchParents: boolean;
    PostHashHex: string;
    ReaderPublicKeyBase58Check: string;
}