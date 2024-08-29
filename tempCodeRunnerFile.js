class BankAccount {
    #balance = 0;

    deposit(amount){
        if (amount>0){
            this.#balance +=amount;
            console.log(`Deposit ${amount}.`);
            
        }else{
            console.log('Deposit amount must be positive');
            
        }
    }
    withdraw(amount){
        if (amount >0 && amount <= this.#balance){
            this.#balance -=amount;
            console.log(`withdraw ${amount}.`);
            
        }else{
            console.log('Insufficient funds or invalid amount.');
            
        }
    }
    checkBalance(){
        console.log(`your balance is ${this.#balance}`);
        
    }
}
const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
myAccount.checkBalance();


    
