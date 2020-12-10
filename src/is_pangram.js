const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = function(text) {
    const letterObj = {};
    letters = text.split('');

    letters.forEach((letter) => {
        if (letterObj[letter]) {
            letterObj[letter] += 1;
        } else {
            letterObj[letter] = 1;
        }
    });

    for (const letter of alphabet) {
        if (!letterObj[letter]) {
            return false;
        }
    }

    return true;

};

module.exports = isPangram;