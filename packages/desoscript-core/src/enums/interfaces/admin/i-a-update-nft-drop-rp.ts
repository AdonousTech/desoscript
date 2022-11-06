export interface IAdminUpdateNFTDropRequestInterfaceRequestPayload {
    UpdaterPublicKeyBase58Check: string;
    DropNumber: number;
    DropTstampNanos: number;
    IsActive: boolean;
    NFTHashHexToAdd: string;
    NFTHashHexToRemove: string;
}