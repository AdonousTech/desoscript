import { IGetUsersStatelessRequestPayload } from "../../users/i-get-users-stateless-request-payload";

export interface IDesoLayerStatelessUserRequest {
    userSub: string;
    payload: IGetUsersStatelessRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}