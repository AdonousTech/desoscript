export interface  IObjectLayerInterceptorRequest {
    /**
     * Instruction for the Object Layer Interceptor. This value
     * is derived from ObjectLayerInstructions enumeration
     * @type {string}
     * @memberof IObjectLayerInterceptorRequest
     */
    instruction: string | undefined;

    /**
     * The name of the S3 bucket for this operation
     * @type {string}
     * @memberof IObjectLayerInterceptorRequest
     */
    bucket: string | undefined;

    /**
     * The value of the S3 bucket key for this operation
     * @type {string}
     * @memberof IObjectLayerInterceptorRequest
     */
    key: string | undefined;


    /**
     *Optional body of the object to PUT in the S3 bucket
     * @memberof IObjectLayerInterceptorRequest
     */
    body?: any;

    bypassLogger?: boolean;
}