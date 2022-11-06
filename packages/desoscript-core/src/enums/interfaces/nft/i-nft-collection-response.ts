import { IPostEntryResponse } from "../posts/i-post-entry-response";
import { IProfileEntryResponse } from "../users/i-profile-entry-response";

export interface INFTCollectionResponse {
    AvailableSerialNumbers: number[];
    PostEntryResponse: IPostEntryResponse;
    ProfileEntryResponse: IProfileEntryResponse;
    NumCopiesForSale: number;
    HighestBidAmountNanos: number;
    LowestBidAmountNanos: number;
}