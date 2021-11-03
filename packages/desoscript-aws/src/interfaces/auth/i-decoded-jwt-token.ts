export interface IDecodedJWTToken {
    header: {
        kid: string;
        alg: string;
    },
    payload: {
        sub: string;
        'cognito:groups': Array<string>;
        'token_use': string;
        scope: string;
        auth_time: number;
        iss: string;
        exp: number;
        iat: number;
        version: 2;
        jti: string;
        client_id: string;
        username: string;
    },
    signature: string;
}