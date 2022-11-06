import { IGetNFTEntriesForNFTPostRequestPayload } from "../../nft/i-get-nft-entries-for-post-request-payload";

export interface IDesoLayerGetNFTForNFTPostRequest {
    userSub: string;
    payload: IGetNFTEntriesForNFTPostRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}