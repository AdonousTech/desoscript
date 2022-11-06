export interface IPostSubmittable {
    endpoint: string
    UpdaterPublicKeyBase58Check: string;
    PostHashHexToModify: string;
    ParentStakeID: string;
    Title: string;
    BodyObj: any;
    RepostedPostHashHex: string;
    PostExtraData: any;
    Sub: string;
    IsHidden: boolean;
    MinFeeRateNanosPerKB: number;
    InTutorial: boolean;
}