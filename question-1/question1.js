
function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject({ error: 'Input must be an array'});
        } else {
            const lowercasedWords = arr
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(lowercasedWords);
        }
    });
}

lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.error(error));
