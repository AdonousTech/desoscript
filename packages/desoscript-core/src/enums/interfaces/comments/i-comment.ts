
/**
 * BitClout comment
 * @export
 * @interface IComment
 */
export interface IComment {
    PostHashHex: string;
    PosterPublicKeyBase58Check: string;
    ParentStakeID: string;
    Body: string;
    ImageURLs: string[];
    RecloutedPostEntryResponse: any;
    CreatorBasisPoints: number;
    StakeMultipleBasisPoints: number;
    TimestampNanos: number;
    IsHidden: boolean;
    ConfirmationBlockHeight: number;
    InMempool: boolean;
    StakeEntry: {
        TotalPostStake: number;
        StakeList: any[]
    };
    StakeEntryStats: {
        TotalStakeNanos: number;
        TotalStakeOwedNanos: number;
        TotalCreatorEarningsNanos: number;
        TotalFeesBurnedNanos: number;
        TotalPostStakeNanos: number
    };
    ProfileEntryResponse: {
        PublicKeyBase58Check: string;
        Username: string;
        Description: string;
        IsHidden: boolean;
        IsReserved: boolean;
        IsVerified: boolean;
        Comments: any;
        Posts: any;
        CoinEntry: {
            CreatorBasisPoints: number;
            BitCloutLockedNanos: number;
            NumberOfHolders: number;
            CoinsInCirculationNanos: number;
            CoinWatermarkNanos: number
        };
        CoinPriceBitCloutNanos: number;
        StakeMultipleBasisPoints: number;
        StakeEntryStats: {
            TotalStakeNanos: number;
            TotalStakeOwedNanos: number;
            TotalCreatorEarningsNanos: number;
            TotalFeesBurnedNanos: number;
            TotalPostStakeNanos: number
        };
        UsersThatHODL: any
    };
    Comments: any;
    LikeCount: number;
    DiamondCount: number;
    PostEntryReaderState: {
        LikedByReader: boolean;
        DiamondLevelBestowed: number;
        RecloutedByReader: boolean;
        RecloutPostHashHex: string
    };
    IsPinned: boolean;
    PostExtraData: any;
    CommentCount: number;
    RecloutCount: number;
    QuoteRecloutCount: number;
    ParentPosts: any;
    DiamondsFromSender: number
}