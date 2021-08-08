import { IOTPermsBrokerRequestPayload } from "./iot-perms-broker-request-payload";

export interface IOTPermsBrokerRequest {
    userSub: string;
    payload: IOTPermsBrokerRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}