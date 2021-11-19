import { IGetPostsStatelessRequestPayload } from "../../posts";

export interface IDesoLayerStatelessPostsRequest {
    userSub: string;
    payload: IGetPostsStatelessRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}