import { IProfile } from "../users/i-profile";
import { INotification } from "./i-notification";
import { IPost } from "../posts/i-post";

export interface ICloutNotificationsResponsePayload {
    Notifications: INotification[];
    PostsByHash: {[key: string]: IPost};
    ProfilesByPublicKey: {[key: string]: IProfile}
}