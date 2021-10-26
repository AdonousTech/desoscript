export interface IAdminGetUserGlobalMetadataRequestPayload {
    AdminPublicKey: string;
    // The public key of the user for whom we'd like to get global metadata
    UserPublicKeyBase58Check: string
}