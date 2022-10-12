import { DataLoader } from './modules/data-loader';
import { ListsRenderer } from './modules/list-renderer';
// const { name, job, friends } = person;

// Array methods

// const arr = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
// const people = [
//     {
//         id: 1,
//         name: 'Anton',
//     },
//     {
//         id: 2,
//         name: 'Denis',
//         friends: ['Ivan']
//     },
//     {
//         id: 3,
//         name: 'Alex',
//         friends: ['Anton'],
//     }
// ];


// const result = arr.map((item, idx) => {
//     return item * item
// })

// const result = arr.filter((item, index) => {
//     return true
// })


// people.map(person => console.log(person.name, person.friends?.includes('Ivan')))

// const result = people.filter(person => Boolean(person.friends?.length));

// const result = people.find(person => person.name === 'Denis');
// const result = people.some(person => person.name === 'Denis');

// const result = arr.reduce((acc, item) => {
//     acc += item;
//
//     return acc;
// }, )

// console.log(result);
//
// const person = {
//     id: 1,
//     name: 'Anton',
//     job: 'Developer',
//     friends: ['Denis', 'Ivan'],
// }


// const arr = [1,2,'hello',4,5];


// const parsePerson = () => {
//     const { friends, name, job } = person;
//     const [one, two, three] = arr;
//
//     console.log(one, two, three)
//
//     console.log(name, job);
//
//
// //    ....
//
//     console.log(name, friends)
// }
//
// parsePerson();

// const result = Object.entries(person);
//
// const a = result.map(([ key, value ]) => {
//     if (key === 'friends') {
//         return value.join(', ')
//     }
//
//     return value
// });
//
// console.log(a)





const usersLoader = new DataLoader('users');
const usersRender = new ListsRenderer(usersLoader);

const container = document.getElementById('app');
const hr = document.createElement('hr');

usersRender.render('email').then(() => {
    container.appendChild(hr);
});

void usersRender.render('name')


