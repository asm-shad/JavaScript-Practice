
function celsiousToFarenheit(celsius){
    let farenheit = celsius * 1.8 + 32;
    return farenheit;
}

function farenheitToCelsious(farenheit){
    let celsius = (farenheit - 32) / 1.8;
    return celsius;
}

console.log(celsiousToFarenheit(57));
console.log(farenheitToCelsious(76));