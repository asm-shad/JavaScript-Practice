

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
}

function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    false;
}

const isLipi = isLeapYear(2032);
console.log(isLipi);

const isLipi2 = isLeapYear2(2200);
console.log(isLipi2);