import { Trade } from './trade';
import { Observable } from 'rxjs';

export interface User{
    displayName: string;
    email: string;
    uid?: string;
}