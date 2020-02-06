def fibonacci_until(n)
  a = 1
  b = 1
  index = 0
  c = 0
  until index >= n
      a = b
      b = c
      c = a+b
      index +=1 
  end
  puts "The number at the #{n} position is #{c}"
end

fibonacci_until(7)