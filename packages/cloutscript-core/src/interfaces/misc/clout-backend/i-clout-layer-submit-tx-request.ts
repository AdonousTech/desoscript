import { ISubmitTransactionPayload } from "../transactions/i-submit-transaction-payload";

export interface ICloutLayerSubmitTxRequest {
    userSub: string;
    payload: ISubmitTransactionPayload,
    instruction?: string;
    bypassLogger?: boolean;
}