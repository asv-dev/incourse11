export class ListsRenderer {
    loader = null;
    container = document.getElementById('app');

    constructor(loader) {
        this.loader = loader;
    }

    #renderData(data, key) {
        const ul = document.createElement('ul');

        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item[key];
            ul.appendChild(li);
        })

        this.container.appendChild(ul);
    }

    async render(key) {
        const data = await this.loader.fetchData();
        this.#renderData(data, key);
    }
}