const arr = [4, 9, 0, 2, 8, 9, 7, 1]

//corner cases => length of array less than 2, duplicate numbers in array

const secondLargest = (arr) => {
    if (arr.length < 2) {  // if number of elements is less than 2
        return -1;
    }
    let largest = - Infinity;
    let secondLargest = - Infinity;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) { // ignoring duplicates
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr))
