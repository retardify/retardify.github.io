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
        }
        console.log('number of uppercases: ' + numberOfUppercase);
        var upperCaseAssigned = 0;
        if (wordLength > 1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qcy1yZXRhcmRpZnknLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpbnB1dHZhbCA9ICQoJy5qcy1pbnB1dCcpXHJcbiAgICAgICAgLnZhbCgpXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgd29yZHMgPSBpbnB1dHZhbC5zcGxpdCgnICcpO1xyXG4gICAgdmFyIGFycmF5TGVuZ3RoID0gd29yZHMubGVuZ3RoO1xyXG4gICAgdmFyIG5ld3N0ciA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc1tpXTtcclxuICAgICAgICB2YXIgd29yZExlbmd0aCA9IHdvcmQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBudW1iZXJPZlVwcGVyY2FzZSA9IDA7XHJcbiAgICAgICAgaWYgKHdvcmRMZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIG51bWJlck9mVXBwZXJjYXNlID0gcmFuZG9tSW50KFxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcih3b3JkTGVuZ3RoIC8gNCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdvcmRMZW5ndGggLyAyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZVcHBlcmNhc2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZVcHBlcmNhc2UgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh3b3JkTGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgbnVtYmVyT2ZVcHBlcmNhc2UgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnbnVtYmVyIG9mIHVwcGVyY2FzZXM6ICcgKyBudW1iZXJPZlVwcGVyY2FzZSk7XHJcbiAgICAgICAgdmFyIHVwcGVyQ2FzZUFzc2lnbmVkID0gMDtcclxuICAgICAgICBpZiAod29yZExlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdmFyIHRlbXBXb3JkID0gd29yZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IHdvcmRMZW5ndGg7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZVcHBlcmNhc2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cHBlckNhc2VBc3NpZ25lZCA8IG51bWJlck9mVXBwZXJjYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5kID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV29yZCA9IHNldENoYXJBdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLmNoYXJBdChpMikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJDYXNlQXNzaWduZWQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpMiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cHBlckNhc2VBc3NpZ25lZCA8IG51bWJlck9mVXBwZXJjYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV29yZCA9IHNldENoYXJBdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLmNoYXJBdChpMikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHBlckNhc2VBc3NpZ25lZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAodXBwZXJDYXNlQXNzaWduZWQgPCBudW1iZXJPZlVwcGVyY2FzZSk7XHJcbiAgICAgICAgICAgIG5ld3N0ciA9IG5ld3N0ciArIHRlbXBXb3JkICsgJyAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoJy5qcy1vdXRwdXQnKS52YWwobmV3c3RyKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRDaGFyQXQoc3RyLCBpbmRleCwgY2hyKSB7XHJcbiAgICBpZiAoaW5kZXggPiBzdHIubGVuZ3RoIC0gMSkgcmV0dXJuIHN0cjtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGluZGV4KSArIGNociArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG4iXX0=
