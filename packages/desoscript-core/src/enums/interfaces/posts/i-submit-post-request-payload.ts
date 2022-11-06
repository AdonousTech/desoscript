import { IPostTxnBody } from "./i-post-txn-body";

export interface ISubmitPostRequestPayload {
    UpdaterPublicKeyBase58Check: string;
    PostHashHexToModify: string;
    ParentStakeID: string;
    Title: string;
    BodyObj: IPostTxnBody;
    RepostedPostHashHex: string;
    PostExtraData: any;
    Sub: string;
    IsHidden: boolean;
    MinFeeRateNanosPerKB: number;
    InTutorial: boolean
}