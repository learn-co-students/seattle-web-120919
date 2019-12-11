require 'pry'

#instance variables
#local variables
#class variables
#global variables -> if you have a constant?

# [["soundarya", 100], ["Chris", 1000]]
class BankAccount
    # binding.pry
    # owner_name
    # balance
    # interest_rate
    # write out all the readers
    # attr_reader 
    # attr_writer will write out our writers.
    @@bank_account_objects = [ ]
    # binding.pry
    #write out readers and writer
    attr_accessor(:owner_name, :balance, :interest_rate)

    def initialize(owner_name, balance, interest_rate)
        # binding.pry
        @owner_name = owner_name
        @balance = balance
        @interest_rate = interest_rate
        @id = @@bank_account_objects.length+1
        @@bank_account_objects.push(self)
        # binding.pry
        # @password = encrypt_password(password)
    end

    def self.whale
        # keep track of all the instances
        @@bank_account_objects.max_by do |bank_account|
            bank_account.balance
        end
    end

    def self.bank_account_objects
        @@bank_account_objects
    end

    def self.overdraw_warning
        #hash or and array
        # we can return the ids
        # min_by || reject || sort || filter || select || find_all
        @@bank_account_objects.select { |bank_account| bank_account.balance < 300 }
    end

    def deposit(new_balance)
        binding.pry
        @balance += new_balance
    end

    def withdraw(new_balance)
        @balance -= new_balance
    end

    #ATTR_READER AND ATTR_ACCESSOR REPLACES THIS
    #instance readers
    # def owner_name
    #     @owner_name
    # end

    # def owner_name=(new_owner_name)
    #     @owner_name = new_owner_name
    # end

    # #instance readers
    # def balance
    #     @balance
    # end

    # def balance=(new_balance)
    #     @balance = new_balance
    # end

    # #instance readers
    # def interest_rate
    #     @interest_rate
    # end

    # #setters
    # def interest_rate=(new_interest_rate)
    #     @interest_rate = new_interest_rate
    # end
end 

# bank_account_objects = [ ]
def create_bank_account_objects
    # binding.pry
    bank_accounts = [{owner_name: "soundarya", balance: 100, interest_rate: 1.01},
        {owner_name: "Chris", balance: 50, interest_rate: 1.02},
        {owner_name: "Jamilah", balance: 3000, interest_rate: 2.06},
        {owner_name: "Cole", balance: 10000, interest_rate: 5.06},
        {owner_name: "Alden", balance: 1200000000000000, interest_rate: 50.05}
    ]

    bank_accounts.each do |bank_account|
        BankAccount.new(bank_account[:owner_name], 
            bank_account[:balance], 
            bank_account[:interest_rate])
    end
end
create_bank_account_objects
binding.pry
