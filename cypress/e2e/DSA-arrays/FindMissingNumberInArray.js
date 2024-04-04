let missedNumber = (arr) => {
    arr.sort();
    let i = 1;
    while (i < arr.length) {
        if (arr[i] - arr[i - 1] !== 1) return arr[i - 1] + 1;
        i++;
    }
    return "Missing number not found!";
}
console.log(missedNumber([10, 9, 7]));