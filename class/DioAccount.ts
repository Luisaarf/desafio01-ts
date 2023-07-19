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
      this.setBalance(value, true)
      console.log(`Você depositou ${value} e agora seu saldo é de ${this.balance} reais`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.setBalance(value, false)
      console.log(`Você sacou ${value} e agora seu saldo é de ${this.balance} reais`)
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
        this.balance += value
      }else { this.balance -= value}
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
