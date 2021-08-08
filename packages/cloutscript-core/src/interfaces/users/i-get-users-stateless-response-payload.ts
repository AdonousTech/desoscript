import { IUser } from './i-user';

/**
 * Response shape of requested  stateless users
 * @export
 * @interface IGetUsersStatelessResponsePayload
 * @link https://github.com/bitclout/frontend/blob/9eb6a3ac4120ae95c16129222816cef906c7947e/src/app/backend-api.service.ts#L552
 */
export interface IGetUsersStatelessResponsePayload {
    DefaultFeeRateNanosPerKB: number;
    ParamUpdaters: {[key: string]: boolean};
    UserList: IUser[];
}