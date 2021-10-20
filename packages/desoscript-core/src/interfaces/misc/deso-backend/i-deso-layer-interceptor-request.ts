import { IDesoLayerBuyCreatorCoinRequest } from "./i-deso-layer-buy-creator-coin-request";
import { IDesoLayerExchangeRateRequest } from "./i-deso-layer-exchange-rate-request";
import { IDesoLayerFeedInterceptorRequest } from "./i-deso-layer-feed-interceptor-request";
import { IDesoLayerHodlrRequest } from "./i-deso-layer-hodlr-request";
import { IDesoLayerLikePostRequest } from "./i-deso-layer-like-post-request";
import { IDesoLayerNotificationsRequest } from "./i-deso-layer-notifications-request";
import { IDesoLayerPublicKeyPostsRequest } from "./i-deso-layer-public-key-posts-request";
import { IDesoLayerSendDiamondRequest } from "./i-deso-layer-send-diamond-request";
import { IDesoLayerSinglePostRequest } from "./i-deso-layer-single-post-request";
import { IDesoLayerSingleProfileRequest } from "./i-deso-layer-single-profile-request";
import { IDesoLayerStatelessFollowRequest } from "./i-deso-layer-stateless-follow-request";

export interface IDesoLayerInterceptorRequest {
    userSub: string;
    payload: IDesoLayerBuyCreatorCoinRequest
             | IDesoLayerExchangeRateRequest
             | IDesoLayerFeedInterceptorRequest
             | IDesoLayerHodlrRequest
             | IDesoLayerLikePostRequest
             | IDesoLayerNotificationsRequest
             | IDesoLayerPublicKeyPostsRequest
             | IDesoLayerSendDiamondRequest
             | IDesoLayerSinglePostRequest
             | IDesoLayerSingleProfileRequest
             | IDesoLayerStatelessFollowRequest;
    instruction?: string;
    bypassLogger?: boolean;
}