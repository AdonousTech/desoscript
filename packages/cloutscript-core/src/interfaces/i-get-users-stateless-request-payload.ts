
/**
 * Request shape for stateless users list
 * api/v0/get-users-stateless
 * @export
 * @interface IGetUsersStatelessRequestPayload
 * @link https://github.com/bitclout/frontend/blob/9eb6a3ac4120ae95c16129222816cef906c7947e/src/app/backend-api.service.ts#L552
 */
export interface IGetUsersStatelessRequestPayload {
    endpoint: string;
    publicKeys: string[];
    SkipForLeaderboard: boolean;
}