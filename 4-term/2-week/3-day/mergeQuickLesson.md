# Sorting visualizations
[Sorting.at](http://sorting.at/)

# Merge Sort

Efficient, divide-and-conquer algorithm.

----

For each element in the list:

- If the list is of length 0 or 1, then it is already sorted. Otherwise:
- Divide the unsorted list into two sublists of about half the size.
- Sort each sublist recursively by re-applying merge sort.
- Merge the two sublists back into one sorted list.

----

![sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

----

# Code
Two main functions: sort and merge.

----

## Sort

```js
function sort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(sort(left), sort(right));
}
```

----

## Merge

```js
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
```

----

# Complexity
O(n log n)

---

# Quick Sort

Another efficient, divide-and-conquer algorithm.

----

For each element in the list:

```
- Find a “pivot” item in the array. This item is the basis for comparison for a single round.
- Start a pointer (the left pointer) at the first item in the array.
- Start a pointer (the right pointer) at the last item in the array.
- While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
- While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left - (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
- If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
- Move the left pointer to the right by one and the right pointer to the left by one.
- If the left pointer and right pointer don’t meet, go to step 1.
```

----

![sort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

----

# Code
Three main functions: sort, partition, and swap.

----

## Sort

```js
function sort(items, left, right) {
    // declare index to be used later when each partition returns 'i'
    var index;
    // if statement to handle the base case (any array smaller
    // than length of 1 is returned
    if (items.length > 1) {
        // if no left or right is entered, set them to first and last indeces in array
        left = typeof left !== "number" ? 0 : left;
        right = typeof right !== "number" ? items.length - 1 : right;
        // set index to return value of partition function
        index = partition(items, left, right);
        // compare current left value to index - 1
        // if left is smaller, then there are still items to be sorted on
        // the left side of the array, so quicksort is called recursively
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        // compare current right value to index
        // if index is smaller than right, then there are still items
        // to be sorted on the right side of the array, so quicksort
        // is called recursively
        if (index < right) {
            quickSort(items, index, right);
        }

    }
    // all recursive calls have finished so the sorted array is returned
    return items;
}
```

----

## Partition

```js
function partition(items, left, right) {
    // find and assign pivot by halving sum of right and left index
    var pivot = items[Math.floor((right + left) / 2)],
        i     = left,
        j     = right;
    // loop until the pointers pass one another
    while (i <= j) {
        // increment i while item[i] is less than pivot
        while (items[i] < pivot) {
            i++;
        }
        // decrement j while item[j] is more than pivot
        while (items[j] > pivot) {
            j--;
        }
        // swap i and j when i is less than or equal to j
        // increment and decrement i and j, respectively
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    // return i to be used as index for left or right pointers in recursive calls of quicksort
    return i;
}
```

----

## Swap

```js
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
```

----

# Complexity
O(n log n)
