
def fibonacci(n)
  # return 1 if n <= 2
  return 1 unless n > 2
  # alternate ruby syntax
  index = 2
  a = 1
  b = 1
  while index <= n
      c = a + b
      puts "a = #{a}"
      puts "b = #{b}"
      puts "c = #{c}"
      puts "index = #{index}"
      puts "============"
      a = b
      b = c
      index += 1
      # remember must increment
  end
 puts "The number at the #{n} position is #{c}"
end


 fibonacci(7)
