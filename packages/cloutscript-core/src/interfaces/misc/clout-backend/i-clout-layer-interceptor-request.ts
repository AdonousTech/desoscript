import { ICloutLayerBuyCreatorCoinRequest } from "./i-clout-layer-buy-creator-coin-request";
import { ICloutLayerExchangeRateRequest } from "./i-clout-layer-exchange-rate-request";
import { ICloutLayerFeedInterceptorRequest } from "./i-clout-layer-feed-interceptor-request";
import { ICloutLayerHodlrRequest } from "./i-clout-layer-hodlr-request";
import { ICloutLayerLikePostRequest } from "./i-clout-layer-like-post-request";
import { ICloutLayerNotificationsRequest } from "./i-clout-layer-notifications-request";
import { ICloutLayerPublicKeyPostsRequest } from "./i-clout-layer-public-key-posts-request";
import { ICloutLayerSendDiamondRequest } from "./i-clout-layer-send-diamond-request";
import { ICloutLayerSinglePostRequest } from "./i-clout-layer-single-post-request";
import { ICloutLayerSingleProfileRequest } from "./i-clout-layer-single-profile-request";
import { ICloutLayerStatelessFollowRequest } from "./i-clout-layer-stateless-follow-request";

export interface ICloutLayerInterceptorRequest {
    userSub: string;
    payload: ICloutLayerBuyCreatorCoinRequest
             | ICloutLayerExchangeRateRequest
             | ICloutLayerFeedInterceptorRequest
             | ICloutLayerHodlrRequest
             | ICloutLayerLikePostRequest
             | ICloutLayerNotificationsRequest
             | ICloutLayerPublicKeyPostsRequest
             | ICloutLayerSendDiamondRequest
             | ICloutLayerSinglePostRequest
             | ICloutLayerSingleProfileRequest
             | ICloutLayerStatelessFollowRequest;
    instruction?: string;
    bypassLogger?: boolean;
}