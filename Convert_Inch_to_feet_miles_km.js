
//12 Inch 1 feet
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' Inch';
    return result;
}

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}


const JenyHeight = inchToFeet2(78);
console.log(JenyHeight);