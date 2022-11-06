import { IPostSubmittable } from "../../posts/i-post-submittable";

export interface IDesoLayerSubmitPostRequest {
    userSub: string;
    payload: IPostSubmittable,
    instruction?: string;
    bypassLogger?: boolean;
}