//Find the index of the peak point in an array
//[1, 2, 3, 23, 5]
//IF there is one element we should return 0
//Check for ascending or descending
//If there is large value in middle run a for loop

function peakPoint(arr , n) {
    if (n == 1) {
        return 0;
    }
    if (arr[0] >= arr[1]) {
        return 0;
    }
    if (arr[n-1] >= arr[n-2]) {
        return n - 1;
    }
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i-1] && arr[i] >= arr[i + 1]) {
            return i;
        }
    }
}

let arr = [1, 2, 3, 4, 2, 6, 3];
let n = arr.length;
console.log(peakPoint(arr, n));


