import { IGetNFTEntriesForNFTPostRequestPayload } from "packages/desoscript-core/dist/types";

export interface IDesoLayerGetNFTForNFTPostRequest {
    userSub: string;
    payload: IGetNFTEntriesForNFTPostRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}