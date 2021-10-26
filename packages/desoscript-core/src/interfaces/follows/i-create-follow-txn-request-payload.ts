export interface ICreateFollowTxnRequestPayload {
    FollowerPublicKeyBase58Check: string;
    FollowedPublicKeyBase58Check: string;
    IsUnfollow: boolean;
    MinFeeRateNanosPerKB: number
}