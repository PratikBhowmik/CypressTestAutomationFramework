//Reverse an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
function reverse() {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverse());