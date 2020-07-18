'use strict';

const checkElem = elem => {
    if (typeof(elem) === 'string' && isNaN(elem)) {
        elem = elem.trim();
        if (elem.length > 30) {
            console.log(`${elem.slice(0, 30)}...`);
        } else {
            console.log(elem);
        }
    } else {
        console.warn('Переданный аргумент не является строкой, пожалуйста исправте аргумент на строку');
    }
};
const text = '        Lorem ipsum dolor sit amet consectetur adipisicing elit.       ';
const textDigitAndString = '     gifjgudf6546656  ';
const textDigit = '45636636';
checkElem(text);
checkElem(textDigitAndString);
checkElem(textDigit);
