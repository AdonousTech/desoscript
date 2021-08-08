import { PutItemInput,
         UpdateItemInput,
         QueryInput } from '@aws-sdk/client-dynamodb';

export interface IDataLayerInterceptorRequest {
    Instruction: string;
    QueryParams: PutItemInput | UpdateItemInput | QueryInput;
    bypassLogger?: boolean;
}