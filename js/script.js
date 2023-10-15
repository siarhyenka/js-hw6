// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.


let str = 'aaa@bbb@ccc';
let newStr = str.replace(/@/g, '!' );
console.log(newStr);

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025. 


// let date = '2025-12-31';
// console.log(date.replace(/-/g, '/d'))


// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

str = 'Я учу javascript!';

console.log(str.substr(2, 4));
console.log(str.substr(6, 10));

console.log(str.substring(2, 5));
console.log(str.substring(6, 16));

console.log(str.slice(2, 5));
console.log(str.slice(6, 16));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.


// let arr = [4, 2, 5, 19, 13, 0, 10]
// const squareRoot = (arr) => {
//     let sumOfCubes = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sumOfCubes += Math.pow(arr[i], 3)
//     }
//     return Math.sqrt(sumOfCubes);
// }
// let result = squareRoot(arr);
// console.log(result);



// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

const modul = (a, b) => {
    let c = Math.abs(a - b);
    return c;
}

console.log(modul(6, 1))


// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

// const addSumbol = (number, length, sumbol) => number.toString().padStart(length, sumbol);

// const getCurrentDate = (date) => {
//     let year = date.getFullYear();
//     let month = addSumbol(date.getMonth(), 2, '0');
//     let day = addSumbol(date.getDate(), 2, '0');
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`

// }

// const result = getCurrentDate(new Date());

// console.log(result);


// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

// const findingAString = (string) => {
//     let regExp = /(ab+a)/gm;
//     let partsOfString = string.match(regExp);
//     return partsOfString;
// }
// let result = findingAString('aa aba abba abbba abca abea');

// console.log(result)

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

// let number = '+375295773411';
// const NumberCheck = (number) => {
//     let regExp = /((\+?)([0-9]{1,3}))(\s?)(\-?[0-9]{2})(([1-9]{3}))(\-?)([0-9]{2})(\-?)([0-9]{2})/gm;
//     let isMatch = regExp.test(number);
//     console.log(isMatch);
//     return isMatch;
// }

// let result = NumberCheck(number);
// console.log(result);

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов. 

let email = 'tema1234.sl-1@gmail.com';

const emailCheck = (email) => {
    let regExp = /(([\w]*[0-9]*\.?-?_?){2,})(([@])([a-zA-Z]*)([.]))(([a-z]*){2,11})/gm;
    let isMatch = regExp.test(email);
    return isMatch
}

let result = emailCheck(email);
console.log(result);