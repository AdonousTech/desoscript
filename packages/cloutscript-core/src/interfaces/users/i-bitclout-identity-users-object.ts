export interface IBitCloutIdentityUsersObject {
    users: {
        [key: string]: {
            accessLevel: number;
            accessLevelHmac: string;
            btcDepositAddress: string;
            encryptedSeedHex: string;
            hasExtraText: boolean;
            network: string;
        } 
    },
    publicKeyAdded: string;
}