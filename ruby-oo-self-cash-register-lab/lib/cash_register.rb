require 'pry'
class CashRegister
    attr_reader :discount, :total
    attr_writer :total
    attr_accessor :items

    def initialize(discount=0.0)
        @total = 0
        @discount = discount
        @items = [ ]
    end

    # def self.test
    #     binding.pry
    # end

    # def self.all
    #     @total
    # end

    def add_item(title, price, quantity=1)
        @total = @total + (price * quantity)
        @last_item_price = price
        @last_quantity_item = quantity
        quantity.times do 
            @items << title
        end
        @items
    end

    def apply_discount
        # binding.pry
        @total -= (@discount.to_f/100 * @total)
        if @discount == 0
            "There is no discount to apply."
        else
            "After the discount, the total comes to $#{@total.to_i}."
        end
    end

    def items
    # binding.pry
        @items
    end

    def void_last_transaction
        @total -= (@last_item_price * @last_quantity_item)
        @items.pop
        # if @total <= 0.0
        #     @total = 0.0
        # end
        if @items.length <= 0
           @total =  0.0
        end
        # binding.pry
    end
end

