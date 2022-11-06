export interface ISendDiamondRequestPayload {
    DiamondLevel: number;
    DiamondPostHashHex: string;
    MinFeeRateNanosPerKB: number;
    ReceiverPublicKeyBase58Check: string;
    SenderPublicKeyBase58Check: string;
}