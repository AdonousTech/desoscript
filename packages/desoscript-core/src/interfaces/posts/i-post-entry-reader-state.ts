export interface IPostEntryReaderState {
    // This is true if the reader has liked the associated post.
    LikedByReader?: boolean;

    // This is true if the reader has reposted the associated post.
    RepostedByReader?: boolean;

    // This is the post hash hex of the repost
    RepostPostHashHex?: string;

    // Level of diamond the user gave this post.
    DiamondLevelBestowed?: number;
}