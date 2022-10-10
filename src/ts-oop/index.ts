import { DataLoader } from './modules/data-loader';

interface User {
    id: string
    name: string;
    avatar: string;
    createdAt: string;
}


class UsersRender {
    private readonly container: Element | null = document.querySelector('#app');
    private readonly loader: DataLoader;

    constructor(loader: DataLoader) {
        this.loader = loader;
    }

    private _setData(usersData: User[]) {
        const ul = document.createElement('ul');

        usersData.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.name;
            ul.appendChild(li);
        })

        this.container?.replaceChildren(ul)
    }

    private async _processRendering() {
        const { data } = await this.loader.getResult<User[]>();
        if (data) {
            this._setData(data);
        }
    }

    render() {
        void this._processRendering();
    }
}

const usersLoader = new DataLoader('users');
const usersRender = new UsersRender(usersLoader);

usersRender.render();
