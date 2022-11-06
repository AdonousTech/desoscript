import { INotificationsRequestPayload } from "../../notifications/i-notifications-request-payload";

export interface IDesoLayerNotificationsRequest {
    userSub: string;
    payload: INotificationsRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}