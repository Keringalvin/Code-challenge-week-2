function swapCase(str) {
    let swappedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            swappedStr += char.toLowerCase();
        } else {
            swappedStr += char.toUpperCase();
        }
    }
    return swappedStr;
}
const input = 'The Quick Brown Fox';
const output = swapCase(input);
console.log(output); 