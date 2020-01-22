def fibonacci_up_to(n)
  return 1 if n <= 2
  index = 3
  a = 1
  b = 1
  arr = [a,b]
  while index <= n
      c = a+b
      a = b
      b = c
      index += 1
      arr << c
  end
 puts "The Fibonacci sequence up to #{n} is #{arr}" 
end

fibonacci_up_to(7)