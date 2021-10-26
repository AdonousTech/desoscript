export interface ITransferCreatorCoinRequestPayload {
    SenderPublicKeyBase58Check: string;
    CreatorPublicKeyBase58Check: string;
    ReceiverUsernameOrPublicKeyBase58Check: string;
    CreatorCoinToTransferNanos: number;
    MinFeeRateNanosPerKB: number;
    Broadcast: boolean;
}