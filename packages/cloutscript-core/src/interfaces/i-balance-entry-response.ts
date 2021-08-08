
/**
 * See
 * https://github.com/bitclout/frontend/blob/ed0dc25754513fab8dda45cd005b6cae795ac5fb/src/app/backend-api.service.ts#L232
 * @export
 * @interface IBalanceEntryResponse
 */
export interface IBalanceEntryResponse {
    HODLerPublicKeyBase58Check: string;
    CreatorPublicKeyBase58Check: string;
    HasPurchased: boolean;
    BalanceNanos: number;
    NetBalanceInMempool: number;
}