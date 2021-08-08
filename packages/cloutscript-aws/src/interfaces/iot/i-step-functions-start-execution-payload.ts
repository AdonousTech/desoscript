export interface IStepFunctionsStartExecutionPayload {
    stateMachineArn: string; /* required */
    input?: string;
    name?: string;
    traceHeader?: string;
}