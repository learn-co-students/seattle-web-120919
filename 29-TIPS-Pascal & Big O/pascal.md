#- Pascal's Triangle

Pascal's Triangle is a famous mathematical concept. It is a triangular array of the sums of the values above it.

https://en.wikipedia.org/wiki/Pascal%27s_triangle

The edges of the triangle are always 1. The inerior numbers are the sum of the numbers above it.

For us, we want to find a way to find the values on the nth row of the triangle.

How can we do this?

Lets store the triangle as an array of arrays. As we move forward in the containing array, the subarrays will increase in length and value.

[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]

so in pseudo code

```
def pascal(n)
  create new empty main_array, or array with [[1]]
  until the # arrays in the main_array # is n
    create a small_array
    loop through the array before
    small_array << array[index] + array[index-1]
    main_array << small_array
  end
  main_array.last
end
```
