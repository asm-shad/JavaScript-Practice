
const calculateFinalScore = (obj) => {
    if (typeof obj !== 'object'){
        return 'Invalid Input';
    }
    
    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFamily !== 'boolean'){
        return 'Invalid Input';
    }

    if (obj.testScore > 50 || obj.schoolGrade < 0 || obj.schoolGrade > 30){
        return 'Invalid Input';
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFamily){
        finalScore += 20;
    }

    if (finalScore >= 80){
        return true;
    } else {
        return false;
    }
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: false }));
console.log(calculateFinalScore("hello")); 
