export interface IGetNFTForUserRequestPayload {
    UserPublicKeyBase58Check: string,
    ReaderPublicKeyBase58Check: string,
    IsForSale: boolean | null
}