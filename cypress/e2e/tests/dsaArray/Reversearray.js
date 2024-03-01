const arr = [1, 2, 3, 4];
function reverse() {
    let newArr = [];
    for (let i = arr.length; i >= 1; i--) {
        newArr.push(i);
    }
    console.log(newArr);
}
reverse();