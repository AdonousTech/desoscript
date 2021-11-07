export interface IGenerativeCollectionItem {
    name: string;
    description: string;
    image: string;
    dna: string;
    edition: number;
    date: number;
    attributes: {[key: string]: string},
    DeSoPostHashHex: string;
    compiler: string;
}