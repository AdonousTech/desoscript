import { IProfileEntryResponse } from "../users/i-profile-entry-response";
export interface ITransactionFee {
    PublicKeyBase58Check: string;
    AmountNanos: number;
    ProfileEntryResponse?: IProfileEntryResponse;
}