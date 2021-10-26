export interface IGetDiamondedPostsRequestPayload {
    ReceiverPublicKeyBase58Check: string;
    ReceiverUsername: string;
    SenderPublicKeyBase58Check: string;
    SenderUsername: string;
    ReaderPublicKeyBase58Check: string;
    StartPostHashHex: string;
    NumToFetch: number
}