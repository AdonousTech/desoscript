import { IPostEntryReaderState } from "./i-post-entry-reader-state";

export interface IPostEntryResponse {
    PostHashHex: string;
    PosterPublicKeyBase58Check: string;
    ParentStakeID: string;
    Body: string;
    RepostedPostHashHex: string;
    ImageURLs: string[];
    VideoURLs: string[];
    RepostPost: IPostEntryResponse;
    CreatorBasisPoints: number;
    StakeMultipleBasisPoints: number;
    TimestampNanos: number;
    IsHidden: boolean;
    ConfirmationBlockHeight: number;
    // PostEntryResponse of the post that this post reposts.
    RepostedPostEntryResponse: IPostEntryResponse;
    // The profile associated with this post.
    ProfileEntryResponse: IPostEntryResponse;
    // The comments associated with this post.
    Comments: IPostEntryResponse[];
    LikeCount: number;
    RepostCount: number;
    QuoteRepostCount: number;
    DiamondCount: number;
    // Information about the reader's state w/regard to this post (e.g. if they liked it).
    PostEntryReaderState?: IPostEntryReaderState;
    // True if this post hash hex is in the global feed.
    InGlobalFeed: boolean;
    CommentCount: number;
    // A list of parent posts for this post (ordered: root -> closest parent post).
    ParentPosts: IPostEntryResponse[];
    InMempool: boolean;
    IsPinned: boolean;
    DiamondsFromSender?: number;
    NumNFTCopies: number;
    NumNFTCopiesForSale: number;
    HasUnlockable: boolean;
    IsNFT: boolean;
    NFTRoyaltyToCoinBasisPoints: number;
    NFTRoyaltyToCreatorBasisPoints: number;
}