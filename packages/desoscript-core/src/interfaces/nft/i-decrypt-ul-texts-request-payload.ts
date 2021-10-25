import { INFTEntryResponse } from "./i-nft-entry-response";

export interface IDecryptUnlockableTextsRequestPayload {
    ReaderPublicKeyBase58Check: string,
    UnlockableNFTEntryResponses: INFTEntryResponse[]
}