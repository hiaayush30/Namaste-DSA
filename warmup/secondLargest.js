const arr = [4, 9, 0, 2, 8, 7, 1]

const secondLargest = (arr) => {
    let largest = - Infinity;
    let secondLargest = - Infinity;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
            continue;
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    console.log("Second Largest element:" + secondLargest)
}

secondLargest(arr)
