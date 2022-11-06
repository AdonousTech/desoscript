import { ILike } from "../../likes/i-like";

export interface IDesoLayerLikePostRequest {
    userSub: string;
    payload: ILike,
    instruction?: string;
    bypassLogger?: boolean;
}