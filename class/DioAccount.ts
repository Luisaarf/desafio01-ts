export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      console.log(`Você depositou ${value}`)
      this.setBalance(value, false)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      console.log(`Você sacou ${value}`)
      this.setBalance(value, true)
    } else{
      console.log(`Você tentou sacar de uma conta inválida ou um valor maior do que seu saldo atual que é de ${this.balance}`)
    }
  }

  getBalance = (): void => {
    if(this.validateStatus()){
    console.log(this.balance)
    }
  }

  setBalance = (value : number, substract : boolean) : void => {
    if(this.validateStatus()){
      if(substract){
        this.balance -= value
      }else { this.balance += value}
      console.log(`Agora seu saldo total é de ${this.balance} reais`)
    }
  }

  getValidateStatus = () : boolean => {
    const result: boolean = this.validateStatus()
    return result
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')  
  }
}
