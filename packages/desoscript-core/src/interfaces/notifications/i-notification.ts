import { INotificationCreatorCoinTxMetadata } from "./i-notification-creator-coin-tx-metadata";
import { INotificationFollowTxIndexMetadata } from "./i-notification-follow-tx-index-metadata";
import { INotificationLikeTxIndexMetadata } from "./i-notification-like-tx-index-metadata";
import { INotificationPrivateMessageTxIndexMetadata } from "./i-notification-private-message-tx-index-metadata";
import { INotificationSubmitPostTxIndexMetadata } from "./i-notification-submit-post-tx-index-metadata";
import { INotificationSwapIdentityTxIndexMetadata } from "./i-notification-swap-identity-tx-index-metadata";
import { INotificationTxnOutputs } from "./i-notification-txn-outputs";
import { INotificationUpdateProfileTxIndexMetadata } from "./i-notification-update-profile-tx-index-metadata";
import { INotificationBitcoinExchangeTxIndexMetadata } from "./i-notification-bitcoin-exchange-tx-index-metadata";
import { INotificationCreatorCoinTransferTxIndexMetadata } from "./i-notification-cc-transfer-tx-index-metadata";
import { IPost } from "../posts/i-post";
import { IProfile } from "../users/i-profile";

export interface INotification {
    Index?: number;
    Metadata?: {
        AffectedPublicKeys?: {
            PublicKeyBase58Check: string; 
            Metadata: string}[];
        BasicTransferTxindexMetadata?: {
            FeeNanos: number;
            TotalInputNanos: number;
            TotalOutputNanos: number;
            UtxOpsDump: string;
        };
        BitcoinExchangeTxindexMetadata?: INotificationBitcoinExchangeTxIndexMetadata;
        BlockHashHex?: string;
        CreatorCoinTransferTxindexMetadata?: INotificationCreatorCoinTransferTxIndexMetadata;
        CreatorCoinTxindexMetadata?: INotificationCreatorCoinTxMetadata;
        FollowTxindexMetadata?: INotificationFollowTxIndexMetadata;
        LikeTxindexMetadata?: INotificationLikeTxIndexMetadata;
        PrivateMessageTxindexMetadata?: INotificationPrivateMessageTxIndexMetadata;
        SubmitPostTxindexMetadata?: INotificationSubmitPostTxIndexMetadata;
        SwapIdentityTxindexMetadata?: INotificationSwapIdentityTxIndexMetadata;
        TransactorPublicKeyBase58Check?: string;
        TxnIndexInBlock?: number;
        TxnOutputs?: INotificationTxnOutputs[];
        TxnType?: 'SUBMIT_POST' | 'LIKE' | 'FOLLOW' | 'CREATOR_COIN' | 'CREATOR_COIN_TRANSFER' | 'BASIC_TRANSFER'; //TODO: Add additional transaction types 
        UpdateProfileTxindexMetadata?: INotificationUpdateProfileTxIndexMetadata;
        Txn?: any;
    };
    TargetCreator?: IProfile;
    TargetPost?: IPost;
    FriendlyNanosToUsd?: String;
    IsMention?: boolean;
}