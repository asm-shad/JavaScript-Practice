
const calculateTax = (income, expenses) => {

    if(income <= 0 || expenses <= 0){
        return "Invalid Input";
    }

    return (income - expenses) * 0.20;
}

console.log(`Tax to be paid: `, calculateTax(10000, 3000));
console.log(`Tax to be paid: `, calculateTax(-5000, 2000));