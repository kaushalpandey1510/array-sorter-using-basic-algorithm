# Array Sorter Using Basic Algorithms

## Features

- **User Input**: Allows users to input numbers via dropdowns.
- **Sorting Options**: Implements three basic sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
- **Dynamic UI Update**: The UI is updated in real time with the sorted values.
- **Interactive Interface**: Includes a "Sort" button for easy user interaction.

---

## Getting Started

### Prerequisites

- A modern web browser with JavaScript enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/array-sorter.git
   ```
2. Open the project folder:
   ```bash
   cd array-sorter
   ```
3. Open the `index.html` file in your browser.

---

## Usage

1. **Input Values**: Use the dropdowns on the webpage to select the numbers you want to sort.
2. **Sort the Array**: Click the **Sort** button to sort the numbers.
3. **View Results**: The sorted numbers will be displayed below the input fields.

---

## Code Structure

### JavaScript Files

- **Main Logic**: Handles sorting and UI updates.
- Sorting Algorithms:
  - **Bubble Sort**: Swaps adjacent elements to sort the array.
  - **Selection Sort**: Finds the smallest element and places it in the correct position.
  - **Insertion Sort**: Inserts each element into the correct position in a sorted section.

### Functions

| Function Name       | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `sortInputArray`    | Handles sorting when the user clicks the "Sort" button.                   |
| `updateUI`          | Updates the output fields with sorted values.                             |
| `bubbleSort`        | Sorts the array using the Bubble Sort algorithm.                          |
| `selectionSort`     | Sorts the array using the Selection Sort algorithm.                       |
| `insertionSort`     | Sorts the array using the Insertion Sort algorithm.                       |

---

## Customization

You can easily extend or modify the project:

1. **Add More Sorting Algorithms**:
   - Implement additional algorithms like Quick Sort, Merge Sort, or Heap Sort.
   - Update the `sortInputArray` function to include new options.

2. **Enhance the UI**:
   - Add styling with CSS for better user experience.
   - Include dropdowns for selecting a specific sorting algorithm.

3. **Input Validation**:
   - Add checks to ensure users input valid numbers.

---

## Example Code Snippet

Here's an example of the **Bubble Sort** function:

```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
```

---

## Contribution

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---


## Acknowledgments

- Frontend design by freeCodeCamp [https://www.freecodecamp.org/]
- Basic sorting algorithms inspired by standard computer science textbooks.
- Project designed for learning and educational purposes.

---

Happy Coding! 🚀# array-sorter-using-basic-algorithm
