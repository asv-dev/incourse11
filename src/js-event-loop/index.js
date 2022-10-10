const ENDPOINT_URL = 'https://634429f0242c1f347f801e41.mockapi.io/users';

// const promisee = fetch(ENDPOINT_URL);
//
// const dataPromise = promisee.then((res) => {
//     return res.json();
// })
//
// dataPromise.then((data) => {
//     console.log(data)
// })



// fetch(ENDPOINT_URL)
//     .then(function (res) {return res.json()})
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const getData = async () => {
//     const res = await fetch(ENDPOINT_URL);
//
//     if (res.ok) {
//         const data = await res.json();
//         console.log(data)
//     }
// }
//
// void getData();

const container = document.querySelector('#users-container');


const render = (usersData) => {
    const ul = document.createElement('ul');

    usersData.map((user) => {
        const li = document.createElement('li');
        li.innerHTML = user.name
        ul.appendChild(li);
    })

    container.appendChild(ul)
};

const loaderConstructor = () => {
    const p = document.createElement('p');

    return (shouldUnload = false) => {
        if (shouldUnload) {
            p.remove()
            return null;
        }

        p.innerHTML = 'LOADING...'
        container.appendChild(p);
    }
}


const resolveData = async () => {
    const loader = loaderConstructor();
    loader();

    const res = await fetch(ENDPOINT_URL);

    if (res.ok) {
        const data = await res.json();

        loader(true);
        render(data);
    }
};

void resolveData();
