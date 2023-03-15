
function squares(array) {
    const result = array.map((x) => x * x);
    return result;
}
const result = squares([1, 2, 3, 4]);
console.log(result);
