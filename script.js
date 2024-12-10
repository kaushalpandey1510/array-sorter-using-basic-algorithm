// Get the sort button element from the DOM
const sortButton = document.getElementById("sort");

/**
 * Function to handle the sorting logic when the sort button is clicked.
 * - Prevents default form submission.
 * - Retrieves input values from dropdowns and converts them to an array.
 * - Sorts the array using JavaScript's built-in `.sort` method.
 * - Updates the UI with sorted values.
 */
const sortInputArray = (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get all input values from dropdowns and convert them to an array of numbers
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  // Sort the array in ascending order
  const sortedValues = inputValues.sort((a, b) => {
    return a - b; // Sort logic: ascending order
  });

  // Update the UI with the sorted array
  updateUI(sortedValues);
}

/**
 * Function to update the UI with the sorted array.
 * - Iterates over the array and updates each output element with the corresponding sorted value.
 */
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    // Get the output element corresponding to the current index
    const outputValueNode = document.getElementById(`output-value-${i}`);
    // Update the element's inner text with the sorted value
    outputValueNode.innerText = num;
  })
}

/**
 * Bubble Sort Algorithm
 * - Iterates over the array repeatedly.
 * - Compares adjacent elements and swaps them if they are in the wrong order.
 * - Repeats the process until no more swaps are needed.
 * 
 * Time Complexity: O(n^2) in the worst and average cases.
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // Swap if the current element is greater than the next element
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array; // Return the sorted array
}

/**
 * Selection Sort Algorithm
 * - Divides the array into a sorted and unsorted section.
 * - Finds the smallest element in the unsorted section and swaps it with the first unsorted element.
 * 
 * Time Complexity: O(n^2) in all cases.
 */
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Assume the current index is the smallest

    // Find the index of the smallest element in the remaining unsorted section
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // Update the smallest index
      }
    }

    // Swap the smallest element with the first unsorted element
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array; // Return the sorted array
}

/**
 * Insertion Sort Algorithm
 * - Iterates over the array and builds a sorted section.
 * - For each element, inserts it into its correct position in the sorted section.
 * 
 * Time Complexity: O(n^2) in the worst case, O(n) in the best case (already sorted array).
 */
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i]; // Current element to be inserted
    let j = i - 1;

    // Shift elements to the right until the correct position is found
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue; // Insert the current element at the correct position
  }
  return array; // Return the sorted array
}

// Attach the event listener to the sort button
// When clicked, the `sortInputArray` function is executed
sortButton.addEventListener("click", sortInputArray);