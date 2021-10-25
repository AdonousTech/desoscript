import { IPostEntryResponse } from "../posts/i-post-entry-response";
import { IProfileEntryResponse } from "../users/i-profile-entry-response";

export interface INFTBidEntryResponse {
    PublicKeyBase58Check: string;
    ProfileEntryResponse: IProfileEntryResponse;
    PostHashHex: string;
    PostEntryResponse: IPostEntryResponse | undefined;
    SerialNumber: number;
    BidAmountNanos: number;
  
    HighestBidAmountNanos: number | undefined;
    LowestBidAmountNanos: number | undefined;
  
    BidderBalanceNanos: number;
  
    selected?: boolean;
}