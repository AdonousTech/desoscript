export interface IDesoFacadeRequest {
    endpoint: string;
    route: string;
    payload: any; // todo add strong payloads
    token?: string;
    isGet?: boolean;
}