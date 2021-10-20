import { IGetFollowsStatelessRequestPayload } from "../../follows/i-get-follows-stateless-request-payload";

export interface IDesoLayerStatelessFollowRequest {
    userSub: string;
    payload: IGetFollowsStatelessRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}