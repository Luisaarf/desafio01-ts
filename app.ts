import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(800)
peopleAccount.withdraw(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(1500)
companyAccount.withdraw(200)
companyAccount.withdraw(1400)
