export interface IGetFollowsRequestPayload {
    Username: string;
    PublicKeyBase58Check: string;
    GetEntriesFollowingUsername: boolean;
    LastPublicKeyBase58Check: string;
    NumToFetch: 50; // hardcode to 50
}