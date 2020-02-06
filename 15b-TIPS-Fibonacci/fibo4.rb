def fibonacci_times_do(n)
  return 1 if n <= 2
  a = 1
  b = 1
  c = 0
  n.times do
      a = b
      b = c
      c = a+b
  end
 puts "The number at the #{n} position is #{c}"
end

fibonacci_times_do(7)