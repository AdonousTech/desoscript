export interface IProfile {
    PublicKeyBase58Check?: string;
    Username?: string;
    Description?: string;
    ProfilePic?: string;
    IsHidden?: boolean;
    IsReserved?: boolean;
    IsVerified?: boolean;
    Comments?: any;
    Posts?: any;
    CoinEntry?: {
        CreatorBasisPoints?:number;
        BitCloutLockedNanos?:number;
        NumberOfHolders?: number;
        CoinsInCirculationNanos?: number;
        CoinWatermarkNanos?: number
     };
     CoinPriceBitCloutNanos?: number;
     StakeMultipleBasisPoints?: number;
     StakeEntryStats?: {
         TotalStakeNanos?: number;
         TotalStakeOwedNanos?:number; 
         TotalCreatorEarningsNanos?: number;
         TotalFeesBurnedNanos?: number;
         TotalPostStakeNanos?: number 
     };
     UsersThatHODL?: any 
}