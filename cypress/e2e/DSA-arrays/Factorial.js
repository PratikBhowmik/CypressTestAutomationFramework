function factorial(number) {
    //Transforming the given number to an array!
    let arr = Array.from(Array(number + 1).keys());

    //Slicing the array
    let c = arr.slice(1,).reduce((a, b) => a * b);
    return c;
}

console.log(factorial(6));