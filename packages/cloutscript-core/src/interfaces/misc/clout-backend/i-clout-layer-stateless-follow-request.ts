import { IGetFollowsStatelessRequestPayload } from "../../follows/i-get-follows-stateless-request-payload";

export interface ICloutLayerStatelessFollowRequest {
    userSub: string;
    payload: IGetFollowsStatelessRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}