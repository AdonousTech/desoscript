import { ILike } from "../../likes/i-like";

export interface ICloutLayerLikePostRequest {
    userSub: string;
    payload: ILike,
    instruction?: string;
    bypassLogger?: boolean;
}