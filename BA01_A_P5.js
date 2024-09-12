
const waitingTime = (waitingTimes, serialNumber) => {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let length = waitingTimes.length;
    for (let i = 0; i < length; i++){
        if (typeof waitingTimes[i] !== 'number'){
            return 'Invalid Input';
        }
    }

    let total = 0;
    for (let i = 0; i < length; i++){
        total += waitingTimes[i];
    }

    let averageTime = Math.round(total / length);

    let peopleWaiting = serialNumber - length - 1;

    let waitingTime = peopleWaiting * averageTime;

    return waitingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime(7, 12));
