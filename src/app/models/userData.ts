export interface UserData {
    userId?: string;
    initialBalance?: {balance:number,date:Date};
    currentBalance?: {balance:number,date:Date}
    accounts?: [];
    investments?: [];
}