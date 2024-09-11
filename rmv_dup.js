
const member = ['kamal', 'jamal', 'riya', 'priya', 'jamal', 'riya'];
const number = [2, 54, 65, 72, 13, 53, 63, 65, 54, 34, 2];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(member);
console.log(uniqueArray);

const uniqueArray2 = noDuplicate(number);
console.log(uniqueArray2);