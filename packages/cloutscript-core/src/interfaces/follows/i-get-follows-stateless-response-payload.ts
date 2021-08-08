import { IUser } from '../users/i-user';

/**
 * Response object for followers request
 * api/v0/get-follows-stateless
 * @export
 * @interface IGetFollowsStatelessResponsePayload
 */
export interface IGetFollowsStatelessResponsePayload {
    NumFollowers: number;
    PublicKeyToProfileEntry: {[key: string]: IUser}
}