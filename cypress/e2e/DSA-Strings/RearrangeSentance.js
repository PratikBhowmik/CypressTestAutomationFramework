//Pratik4 Bhowmik5 name2 My1 is3
let rearrangedString = (string) => {
    let arr = string.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].charAt(arr[i].length - 1) - '0' - 1;
        result[index] = arr[i].substring(0, arr[i].length - 1);
    }
    return result.join(' ');
}
console.log(rearrangedString("Pratik4 Bhowmik5 name2 My1 is3"));