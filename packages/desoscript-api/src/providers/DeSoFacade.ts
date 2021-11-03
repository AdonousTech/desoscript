import { AxiosRequestConfig } from "axios";

export class DeSoFacade {

    private config: AxiosRequestConfig = {};
    private token: string | undefined;

    constructor(token?: string) {
        token ? this.token = token : this.token = undefined;
    }

    public updateAndReturnConfig(endpoint: string, route: string | undefined, payload: any, isGet?: boolean, whitelistHeader?: string): AxiosRequestConfig {
        this.config.baseURL = endpoint; // e.g. https://api.bitcloutapps.ninja
        route ? this.config.url = route : this.config.url = undefined;
        
        if (isGet) {
            this.config.method = 'get';
        } else {
            this.config.method = 'post';
            this.config.data = payload;
        }

        this.config.headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }

        if (whitelistHeader) {
            this.config.headers['User-Agent'] = whitelistHeader;
        }

        if (this.token) {
            this.config.headers['Authorization'] = this.token
        }

        return this.config
    }

    
}