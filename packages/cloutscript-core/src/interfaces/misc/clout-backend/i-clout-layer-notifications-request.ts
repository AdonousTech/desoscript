import { INotificationsRequestPayload } from "../notifications/i-notifications-request-payload";

export interface ICloutLayerNotificationsRequest {
    userSub: string;
    payload: INotificationsRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}