import { ICognitoIdTokenPayload } from './i-cognito-id-token-payload';
export interface ILogMetricFilter {
    eventType?: "CriticalError",
    code: string;
    componenet: string;
    description: string;
    explanation: string;
    user: ICognitoIdTokenPayload;
    bypassLogger?: boolean;
}