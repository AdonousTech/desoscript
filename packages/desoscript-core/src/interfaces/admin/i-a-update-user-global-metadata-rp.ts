export interface IAdminUpdateUserGlobalMetadataRequestPayload {
    AdminPublicKey: string;
    // The public key of the user to update.
    UserPublicKeyBase58Check: string;
    Username: string;
    IsBlacklistUpdate: boolean;
    RemoveEverywhere: boolean;
    RemoveFromLeaderboard: boolean;
    IsWhitelistUpdate: boolean;
    WhitelistPosts: boolean;
    RemovePhoneNumberMetadata: boolean;
}