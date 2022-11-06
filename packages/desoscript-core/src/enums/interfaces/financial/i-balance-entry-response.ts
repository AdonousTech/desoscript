import { IProfileEntryResponse } from "../users/i-profile-entry-response";

/**
 * See
 * https://github.com/bitclout/frontend/blob/ed0dc25754513fab8dda45cd005b6cae795ac5fb/src/app/backend-api.service.ts#L232
 * @export
 * @interface IBalanceEntryResponse
 */
export interface IBalanceEntryResponse {
  // The public keys are provided for the frontend
  HODLerPublicKeyBase58Check: string;
  // The public keys are provided for the frontend
  CreatorPublicKeyBase58Check: string;

  // Has the hodler purchased these creator coins
  HasPurchased: boolean;
  // How much this HODLer owns of a particular creator coin.
  BalanceNanos: number;
  // The net effect of transactions in the mempool on a given BalanceEntry's BalanceNanos.
  // This is used by the frontend to convey info about mining.
  NetBalanceInMempool: number;

  ProfileEntryResponse: IProfileEntryResponse;
}