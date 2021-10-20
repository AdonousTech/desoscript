import { ISubmitTransactionPayload } from "../../transactions/i-submit-transaction-payload";

export interface IDesoLayerSubmitTxRequest {
    userSub: string;
    payload: ISubmitTransactionPayload,
    instruction?: string;
    bypassLogger?: boolean;
}