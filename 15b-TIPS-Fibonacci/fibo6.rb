def calculate_phi(n)
  if n <= 2
    puts "The value of PHI at position #{n} is 1"
   end
  index = 3
  a = 1.0
  b = 1
  while index <= n
      c = a+b
      puts "The value of PHI at position #{index} is #{(c/b).round(10)}"
      a = b
      b = c
      index += 1  
  end
end
calculate_phi(26) 