function getRandomNumber(min, max) {
    return Math.floor(Math.random() * 10) + min;
}

let randomNumber = getRandomNumber(10, 20);
console.log(randomNumber);
