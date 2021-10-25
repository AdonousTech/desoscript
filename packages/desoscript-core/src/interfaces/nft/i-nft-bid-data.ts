import { IPostEntryResponse } from "../posts/i-post-entry-response";
import { INFTBidEntryResponse } from "./i-nft-bid-entry-response";
import { INFTEntryResponse } from "./i-nft-entry-response";

export interface INFTBidData {
    PostEntryResponse: IPostEntryResponse;
    NFTEntryResponses: INFTEntryResponse[];
    BidEntryResponses: INFTBidEntryResponse[];
}