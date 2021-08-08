/**
 * Request shape for requesting a single profile
 * api/v0/get-single-profile
 * @export
 * @interface IGetSingleProfileRequestPayload
 * @link https://github.com/bitclout/frontend/blob/9eb6a3ac4120ae95c16129222816cef906c7947e/src/app/backend-api.service.ts#L771
 */
export interface IGetSingleProfileRequestPayload {
    endpoint: string;
    PublicKeyBase58Check?: string;
    Username: string; 
}