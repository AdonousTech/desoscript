export interface IGetMessagesRequestPayload {
    PublicKeyBase58Check: string;
    FetchAfterPublicKeyBase58Check: ""; // hardcoded default
    NumToFetch: number;
    HoldersOnly: boolean;
    HoldingsOnly: boolean;
    FollowersOnly: boolean;
    FollowingOnly: boolean;
    SortAlgorithm: "time"; // hardcoded default
}