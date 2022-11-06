export interface IGetHodlersForPublicKeyRequestPayload {
    PublicKeyBase58Check: string;
    Username: string;
    LastPublicKeyBase58Check: string;
    NumToFetch: number;
    FetchHodlings: boolean;
    FetchAll: boolean;
}