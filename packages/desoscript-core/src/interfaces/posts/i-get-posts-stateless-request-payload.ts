export interface IGetPostsStatelessRequestPayload {
    PostHashHex: string;
    ReaderPublicKeyBase58Check: string;
    OrderBy: string;
    StartTstampSecs: number;
    PostContent: string;
    NumToFetch: number;
    FetchSubcomments: boolean;
    GetPostsForFollowFeed: boolean;
    GetPostsForGlobalWhitelist: boolean;
    GetPostsByDESO: boolean;
    MediaRequired: boolean;
    PostsByDESOMinutesLookback: number;
    AddGlobalFeedBool: boolean
}