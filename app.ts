import { CompanyAccount } from './class/CompanyAccount'
import { EspecialClient } from './class/EspecialClient'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(' -----> PEOPLE ACCOUNT <-----')
peopleAccount.getName()
peopleAccount.getAccountnumber()
peopleAccount.getDocId()
peopleAccount.getBalance()
peopleAccount.setBalance(900,false)
peopleAccount.deposit(800)
peopleAccount.withdraw(100)
peopleAccount.getValidateStatus()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(' -----> COMPANY ACCOUNT <-----')
companyAccount.getName()
companyAccount.getAccountnumber()
companyAccount.getBalance()
companyAccount.setBalance(400,false)
companyAccount.deposit(1500)
companyAccount.withdraw(200)
companyAccount.getLoan(300)
companyAccount.getValidateStatus()

const especialClient : EspecialClient = new EspecialClient('Luisa',30)
console.log(' -----> ESPECIAL CLIENT ACCOUNT<-----')
especialClient.getName()
especialClient.getAccountnumber()
especialClient.setBalance(800,false)
console.log(especialClient.getValidateStatus())
especialClient.deposit(540)
especialClient.withdraw(200)
especialClient.getBalance()
