import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Trade {
    id?: string;
    date?: number;
    pair?: string;
    type?: boolean;
    entry?: number;
    amount?: number;
    stopLoss?: number;
    exit?: number;
    profit?: number;
}