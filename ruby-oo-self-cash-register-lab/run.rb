require_relative 'lib/cash_register'
require 'pry'

cr1 = CashRegister.new(100.00)
cr2 = CashRegister.new()
binding.pry