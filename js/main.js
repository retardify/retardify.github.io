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
    copyOutput();
});
$('body').on('click', '.js-copy', function() {
    copyOutput();
});

function copyOutput() {
    if ($('#js-checkbox').is(':checked')) {
        $('.js-output').select();
        document.execCommand('Copy');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        } else if (document.selection) {
            document.selection.empty();
        }
    }
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        $('.js-retardify')
            .first()
            .click();
    }
});

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtcmV0YXJkaWZ5JywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaW5wdXR2YWwgPSAkKCcuanMtaW5wdXQnKVxyXG4gICAgICAgIC52YWwoKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyIHdvcmRzID0gaW5wdXR2YWwuc3BsaXQoJyAnKTtcclxuICAgIHZhciBhcnJheUxlbmd0aCA9IHdvcmRzLmxlbmd0aDtcclxuICAgIHZhciBuZXdzdHIgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB3b3JkID0gd29yZHNbaV07XHJcbiAgICAgICAgdmFyIHdvcmRMZW5ndGggPSB3b3JkLmxlbmd0aDtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZVcHBlcmNhc2UgPSAwO1xyXG4gICAgICAgIGlmICh3b3JkTGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBudW1iZXJPZlVwcGVyY2FzZSA9IHJhbmRvbUludChcclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iod29yZExlbmd0aCAvIDQpLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcih3b3JkTGVuZ3RoIC8gMilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG51bWJlck9mVXBwZXJjYXNlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG51bWJlck9mVXBwZXJjYXNlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAod29yZExlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIG51bWJlck9mVXBwZXJjYXNlID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdvcmRMZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBudW1iZXJPZlVwcGVyY2FzZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdudW1iZXIgb2YgdXBwZXJjYXNlczogJyArIG51bWJlck9mVXBwZXJjYXNlKTtcclxuICAgICAgICB2YXIgdXBwZXJDYXNlQXNzaWduZWQgPSAwO1xyXG4gICAgICAgIGlmICh3b3JkTGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgdGVtcFdvcmQgPSB3b3JkO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgd29yZExlbmd0aDsgaTIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlVwcGVyY2FzZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwcGVyQ2FzZUFzc2lnbmVkIDwgbnVtYmVyT2ZVcHBlcmNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXb3JkID0gc2V0Q2hhckF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQuY2hhckF0KGkyKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHBlckNhc2VBc3NpZ25lZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwcGVyQ2FzZUFzc2lnbmVkIDwgbnVtYmVyT2ZVcHBlcmNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXb3JkID0gc2V0Q2hhckF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQuY2hhckF0KGkyKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyQ2FzZUFzc2lnbmVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IHdoaWxlICh1cHBlckNhc2VBc3NpZ25lZCA8IG51bWJlck9mVXBwZXJjYXNlKTtcclxuICAgICAgICAgICAgbmV3c3RyID0gbmV3c3RyICsgdGVtcFdvcmQgKyAnICc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJCgnLmpzLW91dHB1dCcpLnZhbChuZXdzdHIpO1xyXG4gICAgY29weU91dHB1dCgpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtY29weScsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29weU91dHB1dCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNvcHlPdXRwdXQoKSB7XHJcbiAgICBpZiAoJCgnI2pzLWNoZWNrYm94JykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAkKCcuanMtb3V0cHV0Jykuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ0NvcHknKTtcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5rZXlwcmVzcyhmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS53aGljaCA9PSAxMykge1xyXG4gICAgICAgICQoJy5qcy1yZXRhcmRpZnknKVxyXG4gICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAuY2xpY2soKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRDaGFyQXQoc3RyLCBpbmRleCwgY2hyKSB7XHJcbiAgICBpZiAoaW5kZXggPiBzdHIubGVuZ3RoIC0gMSkgcmV0dXJuIHN0cjtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGluZGV4KSArIGNociArIHN0ci5zdWJzdHIoaW5kZXggKyAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG4iXX0=
