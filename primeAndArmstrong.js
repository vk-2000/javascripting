const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const isArmstrong = num => {
    const numberOfDigits = num.toString().length
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10);
    }
    return sum == num
}

const isPrimeAndArmstrong = n => {
    return isPrime(n) && isArmstrong(n);
}

console.log(isPrimeAndArmstrong(153));