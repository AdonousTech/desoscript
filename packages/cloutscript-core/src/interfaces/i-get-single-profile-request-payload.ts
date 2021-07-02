/**
 * Request shape for requesting a single profile
 * api/v0/get-single-profile
 * @export
 * @interface getSingleProfileRequestPayload
 */
export interface getSingleProfileRequestPayload {
    PublicKeyBase58Check?: string;
    Username: string; 
}