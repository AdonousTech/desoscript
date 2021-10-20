import { IProfileEntryResponse } from "packages/desoscript-core";

export interface ITransactionFee {
    PublicKeyBase58Check: string;
    AmountNanos: number;
    ProfileEntryResponse?: IProfileEntryResponse;
}