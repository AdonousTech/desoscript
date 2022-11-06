export interface Transaction {
    inputs: {
        txID: string;
        index: number;
      }[];
      outputs: {
        amountNanos: number;
        publicKeyBase58Check: string;
      }[];
    
      txnType: string;
      publicKeyBase58Check: string;
      signatureBytesHex: string;
}