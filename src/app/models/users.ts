import { Trade } from './trade';
import { Observable } from 'rxjs';

export interface User{
    id?: string;
    name: string;
    email: string;
    password: string;
}