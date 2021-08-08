import { IComment } from "./i-comment";
import { IPost } from "./i-post";
import { IUser } from "./i-user";

/**
 * Response shape of requested BitClout profile
 * api/v0/get-single-profile
 * @export
 * @interface IGetSingleProfileResponsePayload
 */
export interface IGetSingleProfileResponsePayload {
    Profile: {
       PublicKeyBase58Check: string;
       Username: string;
       Description: string;
       ProfilePic: string;
       IsHidden: boolean;
       IsReserved: boolean;
       IsVerified: boolean;
       Comments: IComment[];
       Posts: IPost[];
       CoinEntry: {
           CreatorBasisPoints:number;
           BitCloutLockedNanos:number;
           NumberOfHolders: number;
           CoinsInCirculationNanos: number;
           CoinWatermarkNanos: number
        };
        CoinPriceBitCloutNanos: number;
        StakeMultipleBasisPoints: number;
        StakeEntryStats: {
            TotalStakeNanos: number;
            TotalStakeOwedNanos:number; 
            TotalCreatorEarningsNanos: number;
            TotalFeesBurnedNanos: number;
            TotalPostStakeNanos: number 
        };
        UsersThatHODL: IUser[] 
    }
    IsBlacklisted: boolean;
    IsGraylisted: boolean;
}