export interface IGetGlobalFeedRequestPayload {
    AddGlobalFeedBool: boolean;
    FetchSubcomments: boolean;
    GetPostsByClout: boolean;
    GetPostsForFollowFeed: boolean;
    GetPostsForGlobalWhitelist: boolean;
    NumToFetch: number;
    OrderBy?: string;
    PostContent?: string;
    PostHashHex?: string;
    PostsByCloutMinutesLookback?: 0;
    ReaderPublicKeyBase58Check: string;
    StartTstampSecs?: any
}