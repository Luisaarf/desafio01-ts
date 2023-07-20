import { DioAccount } from "./DioAccount";

export class EspecialClient extends DioAccount {
    constructor(name: string, accountNumber: number ){
        super(name, accountNumber)    
    }

    deposit = (value: number) : void => {
        if (this.getValidateStatus()){
            super.deposit(value + 10);
        }
    }
}