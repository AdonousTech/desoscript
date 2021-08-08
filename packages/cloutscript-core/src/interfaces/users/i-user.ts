import { IComment } from "../comments/i-comment";
import { IPost } from "../posts/i-post";

/**
 * Bitclout User
 * @export
 * @interface IUser
 */
export interface IUser {
    BalanceNanos?: number;
    BlockedPubKeys?: {[key: string]: any};
    CanCreateProfile?: boolean;
    HasPhoneNumber?: boolean;
    IsAdmin?: boolean;
    ProfileEntryResponse?: {
        CoinEntry?: {
            BitCloutLockedNanos: number;
            CoinWatermarkNanos: number;
            CoinsInCirculationNanos: number;
            CreatorBasisPoints: number;
            NumberOfHolders: number;
        };
        CoinPriceBitCloutNanos?: number;
        Comments?: IComment[];
        Description?: string;
        IsHidden?: boolean;
        IsReserved?: boolean;
        IsVerified?: boolean;
        Posts?: IPost[];
        ProfilePic?: string;
        PublicKeyBase58Check?: string;
        StakeEntryStats?: {
            TotalCreatorEarningsNanos: number;
            TotalFeesBurnedNanos: number;
            TotalPostStakeNanos: number;
            TotalStakeNanos: number;
            TotalStakeOwedNanos: number;
        };
        StakeMultipleBasisPoints?: number;
        Username?: string;
        UsersThatHODL?: IUser[];

    };
    PublicKeyBase58Check?: string;
    PublicKeysBase58CheckFollowedByUser?: string[];
    UnminedBalanceNanos: number;
    UsersWhoHODLYou: IUser[];
    UsersYouHODL: IUser[];
}