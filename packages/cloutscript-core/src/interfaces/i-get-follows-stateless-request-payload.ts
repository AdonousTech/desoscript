
/**
 * Request payload for follower list/object
 * api/v0/get-follows-stateless
 * @export
 * @interface IGetFollowsStatelessRequestPayload
 */
export interface IGetFollowsStatelessRequestPayload {
    GetEntriesFollowingUsername: boolean;
    LastPublicKeyBase58Check: string;
    NumToFetch: number;
    PublicKeyBase58Check: string;
    Username: string;
}