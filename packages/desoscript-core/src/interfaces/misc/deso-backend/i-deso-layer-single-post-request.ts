import { IGetSinglePostRequestPayload } from "../../posts/i-get-single-post-request-payload";

export interface IDesoLayerSinglePostRequest {
    userSub: string;
    payload: IGetSinglePostRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}