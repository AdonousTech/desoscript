import * as axios from 'axios';
import { AxiosRequestConfig,
         AxiosResponse,
         AxiosError } from 'axios';
export class DesoRequestHelper {

    public config: AxiosRequestConfig;

    constructor(config: AxiosRequestConfig) {
        this.config = config;
    }

    makeRequest(): Promise<any> {
        return new Promise(async (resolve,reject) => {
            try {
                axios.default(this.config).then((response: AxiosResponse) => {
                    /**
                     * DeSo protocol returns data property in body of response. This is
                     * a standard technique
                    */
                    console.info('[INFO] - HTTP RESPONSE HEADERS :: ', response.headers);
                    console.info('[INFO] - HTTP RESPONSE DATA :: ', response.data);
                    resolve(response.data);
                }).catch((error: AxiosError) => {
                    if (error.response) {
                        /**
                         * The request was made and the server responded with a status code that
                         * falls out of the range of 2xx
                        */
                       console.error('[ERROR] - HTTP ERROR RESPONSE STATUS :: ', error.response.status);
                       console.error('[ERROR] - HTTP ERROR RESPONSE HEADERS :: ', error.response.headers);
                       console.error('[ERROR] - HTTP ERROR RESPONSE DATA :: ', error.response.data);
                       reject(`status :: ${error.response.status}`);
                    } else if (error.request) {
                        /**
                         * The request was made, but not response was received. error.request is an instance
                         * of http.ClientRequest in Node.js
                        */
                        console.error('[ERROR] - HTTP CLIENT REQUEST ERROR :: ', error.request);
                        reject(`request :: ${JSON.stringify(error.request)}`);
                    } else {
                        /**
                         * Something happened in setting up the request that triggered an Error
                        */
                       console.error('[ERROR] - UNKNOWN HTTP ERROR :: ', error.message);
                       reject(error.message);
                    }
                })
            } catch (error) {
                console.error('[ERROR] - CAUGHT IN PROMISE :: ', error);
                reject(error);
            }
        })
    }

}