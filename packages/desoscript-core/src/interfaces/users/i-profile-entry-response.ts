import { IPostEntryResponse } from "../posts/i-post-entry-response";

export interface IProfileEntryResponse {
    Username: string;
    Description: string;
    ProfilePic?: string;
    CoinEntry?: {
      DeSoLockedNanos: number;
      CoinWatermarkNanos: number;
      CoinsInCirculationNanos: number;
      CreatorBasisPoints: number;
    };
    CoinPriceDeSoNanos?: number;
    StakeMultipleBasisPoints?: number;
    PublicKeyBase58Check?: string;
    UsersThatHODL?: any;
    Posts?: IPostEntryResponse[];
    IsReserved?: boolean;
    IsVerified?: boolean;
}