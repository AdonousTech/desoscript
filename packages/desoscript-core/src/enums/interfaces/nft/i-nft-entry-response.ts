import { IProfileEntryResponse } from "../users/i-profile-entry-response";
import { IPostEntryResponse } from "../posts/i-post-entry-response";

export interface INFTEntryResponse {
    OwnerPublicKeyBase58Check: string;
    ProfileEntryResponse: IProfileEntryResponse | undefined;
    PostEntryResponse: IPostEntryResponse | undefined;
    SerialNumber: number;
    IsForSale: boolean;
    MinBidAmountNanos: number;
    LastAcceptedBidAmountNanos: number;
  
    HighestBidAmountNanos: number;
    LowestBidAmountNanos: number;
  
    // only populated when the reader is the owner of the nft and there is an unlockable.
    LastOwnerPublicKeyBase58Check: string | undefined;
    EncryptedUnlockableText: string | undefined;
    DecryptedUnlockableText: string | undefined;
}