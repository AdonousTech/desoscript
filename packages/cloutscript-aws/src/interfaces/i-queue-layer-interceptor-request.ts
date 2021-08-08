import { SendMessageRequest } from '@aws-sdk/client-sqs';
export interface IQueueLayerInterceptorRequest {
    userSub: string;
    payload: SendMessageRequest,
    instruction?: string;
    bypassLogger?: boolean;
}