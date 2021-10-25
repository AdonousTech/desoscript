import { IPostEntryReaderState } from "../posts/i-post-entry-reader-state";

export interface IDiamondsPost {
    Post: IPostEntryReaderState;
    // Boolean that is set to true when this is the first post at a given diamond level.
    ShowDiamondDivider?: boolean;
}