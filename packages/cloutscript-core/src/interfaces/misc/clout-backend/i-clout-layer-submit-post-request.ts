import { IPostSubmittable } from "../posts/i-post-submittable";

export interface ICloutLayerSubmitPostRequest {
    userSub: string;
    payload: IPostSubmittable,
    instruction?: string;
    bypassLogger?: boolean;
}