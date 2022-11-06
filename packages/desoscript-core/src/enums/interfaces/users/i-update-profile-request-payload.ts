export interface IUpdateProfileRequestPayload {
    UpdaterPublicKeyBase58Check: string;
    // Optional: Only needed when updater public key != profile public key
    ProfilePublicKeyBase58Check?: string;
    NewUsername: string;
    NewDescription: string;
    NewProfilePic: string;
    NewCreatorBasisPoints: number;
    NewStakeMultipleBasisPoints: number;
    IsHidden: boolean;
    // End specific fields
    MinFeeRateNanosPerKB: number
}