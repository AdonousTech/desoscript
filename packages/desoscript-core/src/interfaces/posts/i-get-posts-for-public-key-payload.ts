export interface IGetPostsForPublicKeyPayload {
    PublicKeyBase58Check?: string;
    MediaRequired?: boolean;
    Username: string;
    ReaderPublicKeyBase58Check: string;
    LastPostHashHex?: '';
    NumToFetch: number;
}