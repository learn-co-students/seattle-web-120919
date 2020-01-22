require "pry"
def fibonacci_loop_do(n)
  return 1 if n <= 2
  index = 2
  a = 1
  b = 1
  c = 0
 loop do
  c = a + b
  a = b
  b = c
  index += 1
  break if index >= n
 end
 puts "The number at the #{n} position is #{c}"
end

fibonacci_loop_do(7)