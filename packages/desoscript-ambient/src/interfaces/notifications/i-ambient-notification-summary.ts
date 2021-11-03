export interface IAmbientNotificationSummary {
    notifications: {
        likes: {
            count: number;
            phrase: 'likes'
        },
        reposts: {
            count: number,
            phrase: 'content reposts'
        },
        follows: {
            count: number,
            phrase: 'follows'
        },
        creatorcoin: {
            count: number,
            phrase: 'creator coin purchases'
        },
        creatorcointransfer: {
            count: number,
            phrase: 'creator coin transfers'
        },
        basictransfer: {
            count: number,
            phrase: 'DESO transfers'
        },
        nftbid: {
            count: number,
            phrase: 'NFT bids'
        },
        nftbidaccepted: {
            count: number,
            phrase: 'NFT bid acceptances'
        }
    }
}
