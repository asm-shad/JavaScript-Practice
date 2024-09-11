function findLongestWord(sentence) {
    let words = sentence.split(' ');

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord;
}

let input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input));
