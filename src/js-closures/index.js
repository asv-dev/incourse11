// let sth = 'Hello world';
//
// function name() {
//     console.log('hello function declaration')
// }
//
// const name1 = function () {
//     console.log('hello function expression')
// }
//

// lexical environment -- null

// { // name
//   //    sth
// //    name1
//
//    test // lexical environment { someVar }
//    test // lexical environment { someVar }

//    testConstructor // lexical environment
// }

// // outer lexical env  --> null
// let name = 'Anton';
//
// function testConstructor(a) { // local lexical environment (name),  --> outer lexical env
//     let name = 'Denis';
//
//
//     return function () { // lexical environment (), --> local lexical environment
//         console.log(name);
//     }
// }
//
// name = 'Ivan';
//
//
// const test = testConstructor();
//
//
// test();


// const counterConstructor = () => {
//     let counter = 0;
//
//     const counterFunction = () => {
//         return counter++
//     };
//
//     return counterFunction;
// }
//
//
// const counter = counterConstructor();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const test = (a) => {
//     console.log(a)
// }
//
//
// test(5); // lexical env of test function { a = 5 }

// const addCalculatorConstructor = (initialNum) => {  // lexical env { initalNum }
//
//     const childFunction = (childNum) => { // lexical env { childNum } --> outer lexical env
//         return initialNum + childNum;
//     }
//
//     return childFunction;
// }
//
// const add5 = addCalculatorConstructor(5);
// const add7 = addCalculatorConstructor(7);
//
// console.log(add5(100));
// console.log(add5(1));
// console.log(add5(7));
// console.log(add5(12));
// console.log(add5(14));
//
//
// console.log('add7', add7(10));

// const arr = [1,2,3,4,5,6,7,8,9,10];
//
// const filterConstructor = (itemNumber) => {
//
//     const filterFunction = function (item) {
//         return item > itemNumber;
//     }
//
//     return filterFunction;
// }
//
// const filter5 = filterConstructor(5);
// const filter3 = filterConstructor(3);
//
// const result = arr.filter(filter5)
//
// console.log(result);

//
// Напиши функцию создания генератора sequence(start, step).
// Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
// Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному.
// Начальное значение по умолчанию равно 0.
// Генераторов можно создать сколько угодно.

// const sequence = (start = 0, step = 1) => {
//     let callsCount = 0;
//     let result = start;
//
//     const generator = () => {
//         if (callsCount > 0) {
//             result += step;
//             return result
//         }
//
//         callsCount++
//         return start;
//     }
//
//     return generator;
// }
//
// const gen = sequence();
// const getWithStep3 = sequence(0, 3);
//
// console.log(gen());
// console.log(gen());
// console.log(gen());
//
// console.log('----');
//
// console.log(getWithStep3())
// console.log(getWithStep3())
// console.log(getWithStep3())


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const map = (arr, fn) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const callResult = fn(arr[i]);
        result.push(callResult);
    }

    return result;
};


const multiplyGenerator = (multiplyNumber) => {
    return (item) => item * multiplyNumber
};


const result = map(arr, multiplyGenerator(10) )

console.log(arr, result)

