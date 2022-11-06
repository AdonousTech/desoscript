import { IGetGlobalFeedRequestPayload } from "../../feeds/i-get-global-feed-request-payload";

export interface IDesoLayerFeedInterceptorRequest {
    userSub: string;
    payload: IGetGlobalFeedRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}