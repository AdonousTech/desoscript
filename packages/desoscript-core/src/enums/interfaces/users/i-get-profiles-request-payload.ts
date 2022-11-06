export interface IGetProfilesRequestPayload {
    PublicKeyBase58Check: string;
    Username: string;
    UsernamePrefix: string;
    Description: string;
    OrderBy: string;
    NumToFetch: number;
    ReaderPublicKeyBase58Check: string;
    ModerationType: string;
    FetchUsersThatHODL: boolean;
    AddGlobalFeedBool: boolean;
}