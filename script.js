'use strict';

const checkElem = elem => {
    if (typeof(elem) === 'string') {
        elem = elem.trim();
        if (elem.length > 30) {
            console.log(`${elem.slice(0, 30)}...`);
        } 
    } else {
        console.warn('Переданный аргумент не является строкой, пожалуйста исправте аргумент на строку');
    }
};
const text = '        Lorem ipsum dolor sit amet consectetur adipisicing elit.       ';
checkElem(3);