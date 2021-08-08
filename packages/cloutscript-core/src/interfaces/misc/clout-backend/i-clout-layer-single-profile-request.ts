import { IGetSingleProfileRequestPayload } from "../../users/i-get-single-profile-request-payload";

export interface ICloutLayerSingleProfileRequest {
    userSub: string;
    payload: IGetSingleProfileRequestPayload,
    instruction?: string;
    bypassLogger?: boolean;
}