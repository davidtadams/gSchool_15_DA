package galvanize;

class Account {
  public int balance = 0;
}

class Transfer {
  Account sourceAccount;
  Account destinationAccount;

  Transfer(Account sourceAccount, Account destinationAccount) {
    this.sourceAccount = sourceAccount;
    this.destinationAccount = destinationAccount;
  }

  void transfer(int amount) {
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
  }
}

class Encapsulation03 {
  public static void main(String[] args){
    Account sourceAccount = new Account();
    Account destinationAccount = new Account();

    sourceAccount.balance = 500;
    destinationAccount.balance = 750;

    Transfer t = new Transfer(sourceAccount, destinationAccount);
    t.transfer(250);

    System.out.println(sourceAccount.balance);
    System.out.println(destinationAccount.balance);
  }
}
