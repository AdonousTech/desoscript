import { IGetSinglePostRequestPayload } from "../../posts/i-get-single-post-request-payload";

export interface ICloutLayerSinglePostRequest {
    userSub: string;
    payload: IGetSinglePostRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}