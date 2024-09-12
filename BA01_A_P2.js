
const sendNotification = (email) => {
    if (!email.includes('@')) {
        return 'Invalid Email';
    }
    const emailParts = email.split('@');
    
    return `Hello ${emailParts[0]}, your email domain is ${emailParts[1]}.`;
}


console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('fahim234.hotmail.com'));