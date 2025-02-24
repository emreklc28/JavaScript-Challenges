function findPrimeNumbers(num, maxLimit = 1000) {
    function isPrime(num1) {
        
        if (num1 === 2) return true;
        if (num1 === 3) return true;
        if (num1 === 5) return true;
        if (num1 === 7) return true;

        if (num1 % 2 === 0) return false;
        if (num1 % 3 === 0) return false;
        if (num1 % 5 === 0) return false;
        if (num1 % 7 === 0) return false;
        
        
        return true;
    }

    
    if (num < 3) return 0;

    let smallest = 0;
    let biggest = 0;
    let numCopy = num;

    while(numCopy > 1) {
        numCopy--;
        if (isPrime(numCopy)) {
            smallest = numCopy;
            break;
        }
    }

    numCopy = num;

    while(numCopy < maxLimit) {
        numCopy++;
        if (isPrime(numCopy)) {
            biggest = numCopy;
            break;
        }
    }

    console.log('num:', num, 'smallest:', smallest, '| biggest:', biggest, '| sum:', smallest + biggest);
    return smallest + biggest;
}

findPrimeNumbers(2);
findPrimeNumbers(3);
findPrimeNumbers(8);
findPrimeNumbers(10);
findPrimeNumbers(12);
findPrimeNumbers(33);
findPrimeNumbers(34);
findPrimeNumbers(98);
findPrimeNumbers(120);
findPrimeNumbers(122);

findPrimeNumbers(170);
findPrimeNumbers(168);
