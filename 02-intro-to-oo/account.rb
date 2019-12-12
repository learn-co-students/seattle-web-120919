#pulling in resource (rubygems.org), and uses in our program
require 'pry'

bank_accounts = [{owner_name: "soundarya", "balance": 100},
                {owner_name: "Chris", balance: 1000},
                {owner_name: "Jamilah", balance: 3000},
                {owner_name: "Cole", balance: 10000}
            ]
class BankAccount
    @@all_the_bank_accounts = [ ]

    attr_accessor :balance, :owner_name

    def initialize(owner_name, balance)
        @owner_name = owner_name
        @balance = balance
        @@all_the_bank_accounts.push(self)
    end

    def self.whale
        @@all_the_bank_accounts.max_by{|bank_account| bank_account.balance}
    end

    def self.all_the_bank_accounts
        @@all_the_bank_accounts
    end

    def self.overdraw_warning
        @@all_the_bank_accounts.select {|account| account.balance < 300}
    end

    def deposit(amount)
        self.balance += amount
    end

    def withdraw(amount)
        self.balance -= amount
    end
end

bank_accounts.map do |ba|
    BankAccount.new(ba[:owner_name], ba[:balance])
end

binding.pry
0