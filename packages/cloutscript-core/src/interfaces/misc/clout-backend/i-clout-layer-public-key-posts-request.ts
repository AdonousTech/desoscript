import { IGetPostsForPublicKeyPayload } from "../posts/i-get-posts-for-public-key-payload";

export interface ICloutLayerPublicKeyPostsRequest {
    userSub: string;
    payload: IGetPostsForPublicKeyPayload,
    instruction?: string;
    bypassLogger?: boolean;
}