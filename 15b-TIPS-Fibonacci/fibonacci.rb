# normal way

def fibonacci(n)
    return 1 if n <= 2
    index = 3
    a = 1
    b = 1
    while index <= n
        c = a+b
        puts "a = #{a}"
        puts "b = #{b}"
        puts "a+b = #{c}"
        puts "index = #{index}"
        puts "============"
        a = b
        b = c
        index += 1
    end
   puts "The number at the #{n} position is #{c}"
end

fibonacci(7)

# loop do

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
    if index >= n
        break
    end
   end
   puts "The number at the #{n} position is #{c}"
end

fibonacci_loop_do(7)

# until loop

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

fibonacci_until(10)

# .times do

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

fibonacci_times_do(10)


# Up to an index

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

# calculate phi
# 1.6180339887

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

# Calculate until approximately n digits