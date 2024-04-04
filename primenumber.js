function findPrimes(arr) {
    const primeArr = [];
    
    for (let num of arr) {
        let isPrime = true;
        
        if (num === 1) {
            primeArr.push(num);
            continue;
        }
        
        for (let i = 2; i <= num / 2; i++) { 
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeArr.push(num);
        }
    }
    
    return primeArr;
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = findPrimes(inputArray);
console.log(resultArray);