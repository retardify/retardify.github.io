$('body').on('click', '.js-retardify', function() {
    var inputval = $('.js-input')
        .val()
        .toLowerCase();
    var words = inputval.split(' ');
    var arrayLength = words.length;
    var newstr = '';
    for (var i = 0; i < arrayLength; i++) {
        var word = words[i];
        var wordLength = word.length;
        var numberOfUppercase = 0;
        if (wordLength > 2) {
            numberOfUppercase = randomInt(
                Math.floor(wordLength / 4),
                Math.floor(wordLength / 2)
            );
            if (numberOfUppercase == 0) {
                numberOfUppercase = 1;
            }
        } else if (wordLength == 2) {
            numberOfUppercase = 1;
        } else if (wordLength == 1) {
            numberOfUppercase = 0;
        }
        console.log('number of uppercases: ' + numberOfUppercase);
        var upperCaseAssigned = 0;
        if (wordLength > 0) {
            var tempWord = word;
            do {
                for (var i2 = 0; i2 < wordLength; i2++) {
                    if (numberOfUppercase > 1) {
                        if (upperCaseAssigned < numberOfUppercase) {
                            var rand = Math.floor(Math.random() * 2 + 1);
                            if (rand == 2) {
                                tempWord = setCharAt(
                                    tempWord,
                                    i2,
                                    word.charAt(i2).toUpperCase()
                                );
                                upperCaseAssigned++;
                            }
                        }
                    } else {
                        if (i2 > 0) {
                            if (upperCaseAssigned < numberOfUppercase) {
                                var rand = Math.floor(Math.random() * 2 + 1);
                                if (rand == 2) {
                                    tempWord = setCharAt(
                                        tempWord,
                                        i2,
                                        word.charAt(i2).toUpperCase()
                                    );
                                    upperCaseAssigned++;
                                }
                            }
                        }
                    }
                }
            } while (upperCaseAssigned < numberOfUppercase);
            newstr = newstr + tempWord + ' ';
        }
    }
    $('.js-output').val(newstr);
});

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
