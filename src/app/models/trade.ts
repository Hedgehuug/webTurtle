
export interface Trade {
    id?: string;
    date?: string;
    pair?: string;
    type?: boolean;
    entry?: number;
    amount?: number;
    stopLoss?: number;
    exit?: number;
    profit?: number;
}