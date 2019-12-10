require 'pry'

#instance variables
#local variables
#class variables
#global variables -> if you have a constant?
bank_accounts = [{owner_name: "soundarya", balance: 100, interest_rate: 1.01},
    {owner_name: "Chris", balance: 1000, interest_rate: 1.02},
    {owner_name: "Jamilah", balance: 3000, interest_rate: 2.06},
    {owner_name: "Cole", balance: 10000, interest_rate: 5.06},
    {owner_name: "Alden", balance: 1200000000000000, interest_rate: 50.05}
]
# [["soundarya", 100], ["Chris", 1000]]
class BankAccount
    # owner_name
    # balance
    # interest_rate
    def initialize(owner_name, balance, interest_rate)
        # binding.pry
        @owner_name = owner_name
        @balance = balance
        @interest_rate = interest_rate
    end

    #instance readers
    def owner_name
        @owner_name
    end

    def owner_name=(new_owner_name)
        @owner_name = new_owner_name
    end

    #instance readers
    def balance
        @balance
    end

    def balance=(new_balance)
        @balance = new_balance
    end

    #instance readers
    def interest_rate
        @interest_rate
    end

    def interest_rate=(new_interest_rate)
        @interest_rate = new_interest_rate
    end
end 

# bank_accounts.each do |bank_account|
#     BankAccount.new(bank_account[:owner_name], bank_account[:balance], bank_account[:interest_rate])
# end
soundarya = BankAccount.new("Soundarya", 100, 1.01)
soundarya.balance = 100000000
binding.pry
