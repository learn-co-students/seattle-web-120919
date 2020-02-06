# Big O Notation

Measures time and space complexity of operations. Generally we are concerned more with time complexity, because that is where gains can happen.

More generally, code has a cost. What does it take to run it? Or to store the data it makes while running? This can add up in the long run.

Also, always assume the worst case. For example, you could find something in a search right away. But always assume the item is the very last item in the array.

Generally, only the n is stated. For example, if you have two O(n) operations, then really you have O(2n). But the convention is to only call this O(n).

Also, remember syntactic sugar can obscure what is happening. For example, I create a .times do loop. It is clear to see that this is a loop.

But lets say I use a .find or a .map. Under the hood, the computer is still looping through an array. Even though the code does not show a loop, a loop is still happening and counts as O(n).

Best case O(1). "Constant Time." Fastest. Examples include reading from an index in an array,and appending to an array. There is no need to search to a particular index. The index is already given.

```
  array[0]
```

O(log(n)). Something like a binary search. Imagine you are searching a phone book for one name only. This would work by dividing the book in half. If the name is in the first half, get rid of the second half. Continue like this until the name is found. Every iteration is 1/2 less than before.

O(n). "Linear Time." The time taken varies with on the length of the input. Examples include finding something in an array.

```
def find_item(item)
array = (0..10).to_a
  array.select do |index|
    item == array[index]
  end
end

find_item(10)
```

O(n^2). "Quadratic Time." Examples include iterating through two arrays, or having two iterators. Because we are looping through two loops, we get n^2 combinations.

```
def max_pair
  max_value = 0
  (1...10).each do |i|
    (1...10).each do |j|
      if i + j > max_value
        max_value = i+j
      end
    end
  end
  p max_value
end

max_pair
```

O(2^n). "Exponential Time." Examples include recursive calls.

```
def fibonacci( n )
  return  n  if ( 0..1 ).include? n
  ( fibonacci( n - 1 ) + fibonacci( n - 2 ) )
end
puts fibonacci( 5 )
```

But there is also space complexity. The amount of storage used is also important.

```
def add_evens(num)
  index = 1
  array = []
  while index < num
    index +=1
    if index % 2 ==0
      array << index
    end
  end
  print array
  array.sum
end

puts add_evens(100)
```

This way we get the sum back. But we also created an array that we really did not even need. A better way would be to do this:

```
def add_evens(num)
  index = 1
  sum = 0
  while index < num
    index +=1
    if index % 2 ==0
      sum += index
    end
  end
end

puts add_evens(100)
```

This way, we get the same result without making an array. Thus we are reducing our space complexity.
