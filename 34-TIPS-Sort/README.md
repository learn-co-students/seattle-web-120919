# TIPS Sorting

### Sorting in JS

`https://www.youtube.com/watch?v=kPRA0W1kECg`

From MDN:

```
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
```

So what does this all mean?

1. Sort is destructive. It will alter your original data. Consider sorting a copy if necessary.
2. Only strings are sorted by default. This can lead to errors when integers are used.
3. Time complexity can vary, but is generally stated to be O(n^2). Some searches may be faster.
4. Different browsers may use different varieties of sorting algorithms to sort.
5. To sort integers, a callback function is needed.

### How to and samples

```
function mySortWithNoCallback(array) {
  return array.sort();
}
console.log(mySortWithNoCallback(["G", "F", "E", "D", "C", "B", "A"]));
// => ["A", "B", "C", "D", "E", "F", "G"]
```

Works fine. However:

```
function mySortWithNoCallback(array) {
  return array.sort();
}
console.log(mySortWithNoCallback([1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]));
// => [1, 1000000, 20, 30, 40, 50, 6, 7, 8, 9]
```

### How to Sort Integers:

This example converts the integers into a string and sorts accordingly. So 100000 is bigger than 1. 20 is less than 6 etc. This is wrong. To sort an integer, a callback is needed. But how?

From MDN:
`To compare numbers instead of strings, the compare function can simply subtract b from a.`

Ascending ES5:

```
function mySortWithACallback(array) {
  return array.sort(function(a, b) {
    return a - b;
  });
}
console.log(mySortWithACallback([1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]));
// => [1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]
```

Ascending ES6:

```
function mySortWithACallback(array) {
  return array.sort((a, b) => a - b);
}
console.log(mySortWithNoCallback([1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]))
// => [1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]
```

Descending ES5:

```
function mySortWithACallback(array) {
  return array.sort(function(a, b) {
    return b - a;
  });
}
console.log(mySortWithACallback([1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]));
```

Descending ES6:

```
function mySortWithACallback(array) {
  return array.sort((a, b) => b - a);
}
console.log(mySortWithACallback([1, 6, 7, 8, 9, 20, 30, 40, 50, 1000000]));
```

### How to sort a nested object

To sort by a nested value, a callback is used. A string callback does not use the subtraction chatacter. It uses the greater or less than operator.

```
[
    { "id": 1,
      "ticker" :"GOOG",
      "name": "Google",
      "type": "Tech",
      "price": 1194.80
    },
    { "id": 2,
      "ticker" :"FB",
      "name": "Facebook",
      "type": "Tech",
      "price": 168.85
    },
    { "id": 3,
      "ticker" :"TWTR",
      "name": "Twitter",
      "type": "Tech",
      "price": 29.41
    }]

   if (sortBy === "Alphabetically") {
      returnedStocks = this.state.displayStocks.sort((a, b) =>
        a.ticker > b.ticker ? 1 : -1
      );
    } else {
      returnedStocks = this.state.displayStocks.sort(
        (a, b) => a.price - b.price
      );
    }
```

Maby different sorting methods exist. Here are three ones to start with.

# Bubble Sort

### https://en.wikipedia.org/wiki/Bubble_sort

`... repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.`

### Pseudo Code

Take an array.
Make a counter if you want to.
Loop through the array. in that loop have:
A second loop that loops through the array starting at array[1].
If the value of array[0] is greater than array[1]
Switch array[0] to a temporary variable
Switch array[1] to the position at array[0]
Switch the temp to array[1]
Repeat until the end of the array
Increment the first loop.
Repeat the second loop again until its end.
Increment the first loop again until one less than array length.
Stop, return new sorted array.

### Bubble Sort

JS

```
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// unsorted, worst case scenario => 45
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sorted, best case scenario => 0
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// random => 21
// const array = [5, 4, 3, 2, 1];
// => demo  array
function bubbleSort(array) {
  let counter = 0;
  // a counter for demonstration purposes. Not necessary
  for (let i = 0; i < array.length - 1; i++) {
    // make one loop from zero to 10
    // increment this loop when the one below it is done
    console.log("+++++++++++++++++++");
    for (let j = 1; j < array.length; j++) {
      //  make a second loop from 1 to 10
      // increment this loop every time
      if (array[j - 1] > array[j]) {
        // if array[0] > array[1] etc..... OR
        // if the array at this index is LESS than the one behind it...
        // no else. do nothing
        let temp = array[j - 1];
        // initialize a temporary variable to stash array[j-1], the bigger one
        array[j - 1] = array[j];
        // assign the space where the bigger one was to the smaller one
        array[j] = temp;
        // assign the smaller one to the bigger one
        counter++;
        //increment the counter
        console.log("i=", i);
        console.log("j=", j);
        console.log(`after iteration ${counter}, the array is   ${array}`);
        console.log("====================================");
      }
    }
  }
  console.log(`The final array = ${array}`);
  return array;
  // sorted
}

console.log(bubbleSort(array.slice()));
// .slice() returns a copy of the original array with nothing sliced.

```

# Selection Sort

### https://en.wikipedia.org/wiki/Selection_sort

`The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.`

### Pseudo Code

Take an array
Maybe make a counter
Make one loop that loops to the end of the array - 1. This loop looks for the index of the minimum value.
Make a new variable that stores index of the minimum value. Not the value itself
Make a second loop.
If the value of the array at the given index in the second loop is less than the value of the array at the minimum index, change the value of the minimum index to the in the current array(j).
When the second loop finishes, compare values as to where to insert
if i itself is not already the minimum:
Assign a temporary variable to array[i],
Assign array[i] to array[min]
Assign array[min] to the temp variable.
So array[j] and array[i] are swapped
Increment i and start again.
Finish the top loop.
Return sorted array.

### Selection Sort

JS

```
function selectionSort(arr) {
  console.log("++++++++++++++++++++++");
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        console.log("If block fires");
        console.log("i=", i);
        console.log("j=", j);
        console.log("minimumIndex before=", minimumIndex);
        minimumIndex = j;
        console.log("minimumIndex after=", minimumIndex);
      }
    }
    console.log("-------------------");
    console.log("i=", i);
    // console.log("j=", j);
    console.log("minimumIndex=", minimumIndex);
    console.log("arr[minimumIndex]=", arr[minimumIndex]);
    console.log("arr before=", arr);
    if (minimumIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = temp;
      console.log("arr after=", arr);
    }
  }
  console.log("%cFINAL", "color: red");
  return arr;
}

// console.log(selectionSort([5, 4, 3, 2, 1]));
// console.log(selectionSort([4, 3, 5, 2, 1]));
console.log(selectionSort([5, 1, 2, 3, 4]));



```
