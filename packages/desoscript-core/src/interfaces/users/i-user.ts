import { IBalanceEntryResponse } from "../financial/i-balance-entry-response";
import { TutorialStatus } from "../../enums"; 
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
    CreatorCoinsPurchasedInTutorial?: number;
    EmailVerified?: boolean;
    HasEmail?: boolean;
    HasPhoneNumber?: boolean;
    IsAdmin?: boolean;
    IsBlacklisted?: boolean;
    IsGraylisted?: boolean;
    IsSuperAdmin?: boolean;
    JumioFinishedTime?: number;
    JumioReturned?: boolean;
    JumioStartTime?: number;
    JumioVerified?: boolean;
    MustCompleteTutorial?: boolean;
    ProfileEntryResponse?: {
        CoinEntry?: {
            CoinWatermarkNanos?: number;
            CoinsInCirculationNanos?: number;
            CreatorBasisPoints?: number;
            DeSoLockedNanos?: number;
            NumberOfHolders?: number;
        };
        CoinPriceDeSoNanos?: number;
        Comments?: IComment[];
        Description?: string;
        IsFeaturedTutorialUpAndComingCreator?: boolean;
        IsFeaturedTutorialWellKnownCreator?: boolean;
        IsHidden?: boolean;
        IsReserved?: boolean;
        IsVerified?: boolean;
        Posts?: IPost[];
        ProfilePic?: string;
        PublicKeyBase58Check?: string;
        Username?: string;
        UsersThatHODL?: IUser[];

    };
    PublicKeyBase58Check?: string;
    PublicKeysBase58CheckFollowedByUser?: string[];
    ReferralInfoResponses?: any;
    TutorialStatus?: TutorialStatus;
    CreatorPurchasedInTutorialUsername?: string;
    UnminedBalanceNanos?: number;
    UsersWhoHODLYouCount?: number;
    UsersYouHODL?: IBalanceEntryResponse[];
}