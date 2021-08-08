import { IStepFunctionsStartExecutionPayload } from "./i-step-functions-start-execution-payload";

export interface IStateMachineInvocationRequest {
    userSub: string;
    payload: IStepFunctionsStartExecutionPayload,
    instruction?: string;
    bypassLogger?: boolean;
}