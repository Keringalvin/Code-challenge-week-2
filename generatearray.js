function generateArray(start, end) {
    const result = [];
    
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    
    return result;
}
console.log(generateArray(4, 7));   
console.log(generateArray(-4, 7));