
/**
 * Represents AWS Cognito token payload
 * Useful when using AWS Amplify for authentication
 * @export
 * @interface ICognitoIdTokenPayload
 */
export interface ICognitoIdTokenPayload {
    "at_hash": string,
    sub: string,
    "cognito:groups": string[],
    iss: string,
    "cognito:username": string,
    nonce: string,
    aud: string,
    identities: any[],
    "token_use": string,
    "auth_time": number,
    exp: number,
    iat: number,
    email: string
}