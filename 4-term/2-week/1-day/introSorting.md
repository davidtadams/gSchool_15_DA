# Introduction to Sorting

---

# Bubble Sort

---

For each element in the list:

* look at the element and the one to the right
* if the left > right, swap them
* Keep swapping until we are at the end of the array.

---

With each iteration, the smaller element in the list bubbles up towards the beginning of the array.

---

![sort](https://camo.githubusercontent.com/63994c2d8e4c5141043caf9109785528cce60fd4/687474703a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30362f427562626c652d736f72742e676966)

---

[Bubble Sort Animations](http://www.sorting-algorithms.com/bubble-sort)

---

Can be implemented using multiple loops (at least two) _or_ recursion.

---

# Pseudo Code

```js
for i = 1:n,
    swapped = false
    for j = n:i+1,
        if a[j] < a[j-1],
            swap a[j,j-1]
            swapped = true
    break if not swapped
end
```

---

# Complexity Analysis

* n - 1 comparisons done in 1st pass
* n - 2 in 2nd pass
* n-3 in 3rd pass etc.

```
(n-1)+(n-2)+(n-3)+.....+3+2+1
Sum = n(n-1)/2
```

---

# O(n^2)

---

Bubble sort is NOT an efficient algorithm

* OK for small number of elements
* Great intro to sorting

---

Bubble Sort with Hungarian ("Csángó") folk dance

<iframe width="560" height="315" src="https://www.youtube.com/embed/lyZQPjUT5B4" frameborder="0" allowfullscreen></iframe>

---

# Selection Sort

---

* Assume the first item is the smallest value (minimum).
* Compare this item to the second item.
* If the second item is smaller than the first, set the second item as the new minimum.
* Continue until you reach the end of the array.
* If the minimum value (index) is not the item (index) you started with, swap them.

---

Similar to Bubble Sort, but instead of comparing each array item to its neighbor, the goal is to locate the smallest remaining value and drop it into the correct place in the array.

---

[Selection Sort Animations](http://www.sorting-algorithms.com/selection-sort)

---

# Pseudo Code

```js
for i = 1:n,
    k = i
    for j = i+1:n, if a[j] < a[k], k = j
    swap a[i,k]
end
```

---

# Complexity Analysis

O(n^2)

---

Selection sort does not adapt to the data in any way (notice that the four animations above run in lock step), so its runtime is always quadratic.

However, selection sort has the property of minimizing the number of swaps. In applications where the cost of swapping items is high, selection sort very well may be the algorithm of choice.

---

Selection Sort with Gypsy folk dance

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ns4TPTC8whw" frameborder="0" allowfullscreen></iframe>

---

# Insertion Sort

---

An insertion sort works by separating an array into two sections:
* a sorted section
* an unsorted section.

Initially, the entire array is unsorted.

---

* If the item value goes after the last item in the sorted section, then do nothing.
* If the item value goes before the last item in the sorted section, remove the item value from the array and shift the last sorted item into the now-vacant spot.
* Compare the item value to the previous value (second to last) in the sorted section.
* If the item value goes after the previous value and before the last value, then place the item into the open spot between them, otherwise, continue this process until the start of the array is reached.

---

![sort](https://camo.githubusercontent.com/399022d62dea463f07706d4911a241f54d1dcaea/687474703a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39632f496e73657274696f6e2d736f72742d6578616d706c652e676966)

---

[Insertion Sort Animations](http://www.sorting-algorithms.com/insertion-sort)

---

# Pseudo Code

```js
for i = 2:n,
    for (k = i; k > 1 and a[k] < a[k-1]; k--)
        swap a[k,k-1]
end
```

---

# Complexity Analysis

O(n^2)

---

Although it is one of the elementary sorting algorithms with O(n^2) worst-case time, use insertion sort when the data is nearly sorted (because it is adaptive) or when the problem size is small (because it has low overhead).

---

Insertion Sort with Romanian folk dance

<iframe width="560" height="315" src="https://www.youtube.com/embed/ROalU379l3U" frameborder="0" allowfullscreen></iframe>
