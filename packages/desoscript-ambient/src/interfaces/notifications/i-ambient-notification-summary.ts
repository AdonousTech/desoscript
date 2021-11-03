export interface IAmbientNotificationSummary {
    notifications: {
        likes?: {
            count: number;
            phrase: string;
        },
        reposts?: {
            count: number,
            phrase: string;
        },
        follows?: {
            count: number,
            phrase: string;
        },
        creatorcoin?: {
            count: number,
            phrase: string;
        },
        creatorcointransfer?: {
            count: number,
            phrase: string;
        },
        basictransfer?: {
            count: number,
            phrase: string;
        },
        nftbid?: {
            count: number,
            phrase: string;
        },
        nftbidaccepted?: {
            count: number,
            phrase: string;
        }
    }
}
