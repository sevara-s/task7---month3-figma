function BankAccount(owner,balance,deposite,withdraw){
    this.deposite = balance + deposite;
    if(balance>withdraw){
    this.withdraw = balance -withdraw;
    }else{
        console.log("Manlag' yetarli emas");
    }
}
let owner1 = new BankAccount("Sevara",2323454565656,565656,9999);
console.log(owner1);