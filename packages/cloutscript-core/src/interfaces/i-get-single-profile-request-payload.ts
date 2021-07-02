/**
 * Request shape for requesting a single profile
 * api/v0/get-single-profile
 * @export
 * @interface IGetSingleProfileRequestPayload
 */
export interface IGetSingleProfileRequestPayload {
    PublicKeyBase58Check?: string;
    Username: string; 
}