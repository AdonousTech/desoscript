import { IAdminGetAllUserGlobalMetadataRequestPayload, 
        IAdminGetMempoolStatsRequestPayload, 
        IAdminGetNFTDropRequestPayload, 
        IAdminGetUserAdminDataRequestPayload,
        IAdminGetUsernameVerificationAuditLogsRequestPayload,
        IAdminGetUserGlobalMetadataRequestPayload,
        IAdminGetVerifiedUsersRequestPayload,
        IAdminGrantVerificationBadgeRequestPayload,
        IAdminPinPostRequestPayload,
        IAdminRemoveNilPostsRequestPayload,
        IAdminRemoveVerificationBadgeRequestPayload,
        IAdminReprocessBitcoinBlockRequestPayload,
        IAdminUpdateGlobalFeedRequestPayload,
        IAdminUpdateNFTDropRequestInterfaceRequestPayload,
        IAdminUpdateUserGlobalMetadataRequestPayload
     } from "../../admin";
import { IBuyCreatorCoinRequestPayload,
         IBuyOrSellCreatorCoinRequestPayload,
         IGetHodlersForPublicKeyRequestPayload,
         ITransferCreatorCoinRequestPayload } from "../../creatorcoin";
import { IGetDiamondedPostsRequestPayload,
         IGetDiamondsForPostRequestPayload,
         IGetDiamondsForPublicKeyRequestPayload,
         ISendDiamondRequestPayload } from "../../diamonds";
import { IGetGlobalFeedRequestPayload } from "../../feeds";
import { IExchangeRateRequestPayload,
         IHodlrRequestPayload } from '../../financial';
import { ICreateFollowTxnRequestPayload,
         IGetFollowsRequestPayload,
         IGetFollowsStatelessRequestPayload }  from '../../follows';
import { IUploadImageRequestPayload } from '../../image';
import { ICreateLikeRequestPayload,
         IGetLikesForPostRequestPayload,
         ILikeRequestPayload  } from '../../likes';
import { IGetMessagesRequestPayload,
         IMarkAllMessagesReadRequestPayload,
         IMarkContactMessagesReadRequestPayload,
         ISendMessageRequestPayload } from '../../messages';
import { IAcceptNFTBidRequestPayload,
         ICreateNFTBidRequestPayload,
         ICreateNFTRequestPayload,
         IDecryptUnlockableTextsRequestPayload,
         IGetNFTBidsForUserRequestPayload,
         IGetNFTBidsNFTPostRequestPayload,
         IGetNFTCollectionSummary,
         IGetNFTEntriesForNFTPostRequestPayload,
         IGetNFTShowcaseRequestPayload,
         IGetNFTForUserRequestPayload,
         IUpdateNFTRequestPayload } from '../../nft';
import { INotificationsRequestPayload } from '../../notifications';
import { IGetPostsStatelessRequestPayload,
         IGetQuoteRepostsForPost,
         IGetRepostsForPostsRequestPayload,
         IGetSinglePostRequestPayload,
         ISubmitPostRequestPayload } from '../../posts';
import { IGetBlockTemplateRequestPayload } from '../../template';
import { IGetAllTxOutputsRequestPayload,
         IGetTransactionRequestPayload,
         ISubmitTransactionRequestPayload } from '../../transactions';
import { IBlockPublicKeyRequestPayload,
         IGetSingleProfileRequestPayload,
         IGetUsersStatelessRequestPayload,
         IUpdateProfileRequestPayload } from '../../users';
        

export interface IDesoLayerInterceptorRequest {
    userSub?: string;
    id?: string; 
    payload?: IAdminGetAllUserGlobalMetadataRequestPayload
    | IAdminGetMempoolStatsRequestPayload
    | IAdminGetNFTDropRequestPayload
    | IAdminGetUserAdminDataRequestPayload
    | IAdminGetUserGlobalMetadataRequestPayload
    | IAdminGetUsernameVerificationAuditLogsRequestPayload
    | IAdminGetVerifiedUsersRequestPayload
    | IAdminGrantVerificationBadgeRequestPayload
    | IAdminPinPostRequestPayload
    | IAdminRemoveNilPostsRequestPayload
    | IAdminRemoveVerificationBadgeRequestPayload
    | IAdminReprocessBitcoinBlockRequestPayload
    | IAdminUpdateGlobalFeedRequestPayload
    | IAdminUpdateNFTDropRequestInterfaceRequestPayload
    | IAdminUpdateUserGlobalMetadataRequestPayload
    | IBuyCreatorCoinRequestPayload
    | IBuyOrSellCreatorCoinRequestPayload
    | IGetHodlersForPublicKeyRequestPayload
    | ITransferCreatorCoinRequestPayload
    | IGetDiamondedPostsRequestPayload
    | IGetDiamondsForPostRequestPayload
    | IGetDiamondsForPublicKeyRequestPayload
    | ISendDiamondRequestPayload
    | IGetGlobalFeedRequestPayload
    | IExchangeRateRequestPayload
    | IHodlrRequestPayload
    | ICreateFollowTxnRequestPayload
    | IGetFollowsRequestPayload
    | IGetFollowsStatelessRequestPayload
    | IUploadImageRequestPayload
    | ICreateLikeRequestPayload
    | IGetLikesForPostRequestPayload
    | ILikeRequestPayload
    | IGetMessagesRequestPayload
    | IMarkAllMessagesReadRequestPayload
    | IMarkContactMessagesReadRequestPayload
    | ISendMessageRequestPayload
    | IAcceptNFTBidRequestPayload
    | ICreateNFTBidRequestPayload
    | ICreateNFTRequestPayload
    | IDecryptUnlockableTextsRequestPayload
    | IGetNFTBidsForUserRequestPayload
    | IGetNFTBidsNFTPostRequestPayload
    | IGetNFTCollectionSummary
    | IGetNFTEntriesForNFTPostRequestPayload
    | IGetNFTShowcaseRequestPayload
    | IGetNFTForUserRequestPayload
    | IUpdateNFTRequestPayload
    | INotificationsRequestPayload
    | IGetPostsStatelessRequestPayload
    | IGetQuoteRepostsForPost
    | IGetRepostsForPostsRequestPayload
    | IGetSinglePostRequestPayload
    | ISubmitPostRequestPayload
    | IGetBlockTemplateRequestPayload
    | IGetAllTxOutputsRequestPayload
    | IGetTransactionRequestPayload
    | ISubmitTransactionRequestPayload
    | IBlockPublicKeyRequestPayload
    | IGetSingleProfileRequestPayload
    | IGetUsersStatelessRequestPayload
    | IUpdateProfileRequestPayload
    instruction?: string;
    bypassLogger?: boolean;
}