
Below you will see three common sorting algorithms and some links to see them in action. One of the best ways to learn these algorithms is to try to implement them yourself. Use sticky notes, a pen and paper, cups, colored blocks or whatever you find best and try to recreate these sorting scenarios. Not only will this help you tremendously in your understanding of the algorithm, but it is __essential__ to have a fundamental knowledge before trying to implement them.

### Bubble Sort

For each element in the list, look at the element and the one to the right, if the left > right, swap them. Keep swapping until we are at the end of the array. Then move onto the next element in the array and repeat this. Bubble sort can be easily implemented using multiple loops (at least two) or recursion.

For bubble sort, The worst case is if we have backwards list (then it takes n passthroughs - 1)

![http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif](http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)

We know for sure that after 1 pass the right most element is sorted correctly, and after 2 passes the right 2 elements are sorted correctly

How can we make bubble sort even smarter? We can always count to see the number of swaps and if there are none we know it's sorted.

Bubble sort is NOT an efficient algorithm, it's worst case performance is O(n^2), because you have to make n iterations through a list checking all n elements each pass so n * n = n^2. This runtime means that as the number of elements sorted increase, the runtime increase quadratically. But efficiency isn't a major concern or if you are sorting a small number of elements, it's a great way to start.

###  Selection Sort

The selection sort algorithm, similar to Bubble Sort in that it shares O(n²) complexity, augments the Bubble Sort algorithm slightly. Instead of comparing each array item to its neighbor, the goal is to locate the *smallest* remaining value and drop it into the correct place in the array. The basic algorithm looks like this:

**Pseudo code:**

1. Assume the first item is the smallest value (minimum).
1. Compare this item to the second item.
1. If the second item is smaller than the first, set the second item as the new minimum.
1. Continue until you reach the end of the array.
1. If the minimum value (index) is not the item (index) you started with, swap them.

#### [Practice with this interactive card game](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting)

We'll need two functions, one to handle our swapping, and one to handle the rest of the sorting logic.

The swap function looks like this:

```js
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
```

The sorting logic is as follows:

```js
function selectionSort(arr) {
    // declare variable min to be used later
    var min;
    // loop through array
    for (var i = 0; i < arr.length; i++) {
        // set min to i for each iteration
        min = i;
        // loop through array, one item ahead of i, for value comparisons
        for (var j = i + 1; j < arr.length; j++) {
            // if any of the items are less than the current min item
            // set min equal to that new item's index
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // if the current i no longer equals min, then min must be smaller
        // therefore we swap i with min
        if (i !== min) {
            swap(arr, i, min);
        }
    }
    // when outer loop completes, return the array
    return arr;
}
```

### Insertion Sort

![http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif](http://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

Divide the list into 2 portions, sorted and unsorted. At each set, move an unsorted to the sorted until the entire list is sorted. We just move elements in the sorted list to the right if they are greater than the new item.

Worst case of insertion sort -> O(n^2)

Best case of insertion sort -> O(n)

> An insertion sort works by separating an array into two sections, a sorted section and an unsorted section. Initially, of course, the entire array is unsorted. The sorted section is then considered to be empty. The first step is to add a value to the sorted section, so the first item in the array is used (a list of one item is always sorted). Then at each item in the unsorted section:

1. If the item value goes after the last item in the sorted section, then do nothing.
1. If the item value goes before the last item in the sorted section, remove the item value from the array and shift the last sorted item into the now-vacant spot.
1. Compare the item value to the previous value (second to last) in the sorted section.
1. If the item value goes after the previous value and before the last value, then place the item into the open spot between them, otherwise, continue this process until the start of the array is reached.

```js
function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

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

- [Implement bubble sort](https://github.com/gschool/bubble_sort)
- Implement insertion sort
- Implement selection sort

## Resources
* [Bubble Sort in JavaScript](http://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)
* [Selection Sort in JavaScript](http://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)
* [Insertion Sort in JavaScript](http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/)
