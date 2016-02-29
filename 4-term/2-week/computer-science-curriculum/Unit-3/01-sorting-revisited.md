## Merge Sort

Similar to quick sort, This is one of the most efficient ways of sorting an array. It has three steps, divide, conquer(sort) and then combine(merge).

![http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif](http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

And here is an example of the process

![http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif](http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif)

**Pseudo Code:**

1. If the list is of length 0 or 1, then it is already sorted. Otherwise:
1. Divide the unsorted list into two sublists of about half the size.
1. Sort each sublist recursively by re-applying merge sort.
1. Merge the two sublists back into one sorted list.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/600px-Merge_sort_algorithm_diagram.svg.png)

**Implemented in JavaScript:**

Merge function:

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

Version that returns a new array:

```js
function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
```

In-place version:

```js
function mergeSort(items){

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));

    // Add the arguments to replace everything between 0 and last item in the array
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
}
```


## Quick Sort

Watch [Alex explain quick sort](https://www.youtube.com/watch?v=XE4VP_8Y0BU&feature=iv&src_vid=M5c_RFKVkko&annotation_id=annotation_155416) on Computerphile.

> Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value. After that, recursively perform the same operation on the items before and after the pivot.

There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array. The basic steps to **partition** an array are:

**Pseudo code:**

1. Find a “pivot” item in the array. This item is the basis for comparison for a single round.
1. Start a pointer (the left pointer) at the first item in the array.
1. Start a pointer (the right pointer) at the last item in the array.
1. While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
1. While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
1. If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
1. Move the left pointer to the right by one and the right pointer to the left by one.
1. If the left pointer and right pointer don’t meet, go to step 1.

The **swap** function is very easy to implement:

```js
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
```

Here is one way to **partition** the array:

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

And finally, here's the implementation for quick sort, which uses both the partition and swap functions:

```js
function quickSort(items, left, right) {
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

## Picking a Sorting Algorithm

With all of the sorting algorithms to choose from – and we've only named a few – which one is **best**? Well, it depends. This largely depends on the type of data we're sorting, how large the input is, and how much performance and speed matter to us.

You don't have a way to measure these sorting algorithms until the Big-O Notation lesson in this unit. Until then, consider watching [15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg) to see how some of them compare visually.

### Bonus question

Most programming languages have a sorting mechanism built in. What sorting algorithm does your language of choice use?

# Exercises:

Once you're comfortable with the general idea of sorting algorithms, the best way to solidify your understanding is to write one out in code. Pick from one of these (or do both!) to practice writing sorting algorithms.

- [Implement merge sort](https://github.com/gSchool/js_merge_sort)
- Implement quick sort 

## Resources: 

* [Merge Sort in JavaScript](http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/)
* [Merge Sort Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
* [Quick Sort in JavaScript](http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)
