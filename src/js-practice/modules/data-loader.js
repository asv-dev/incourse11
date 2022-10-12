export class MyClass {
    constructor() {
        console.log('hello');
    }
}

export class DataLoader {
    endpointUrl = 'https://6346ef7304a6d457579cce97.mockapi.io/api/incourse';

    constructor(resource) {
        this.endpointUrl = `${this.endpointUrl}/${resource}`;
    }

    async #makeRequest() {
        try {
            const res = await fetch(this.endpointUrl);

            if (!res.ok) {
                throw new Error('Unhandled server error');
            }

            return res;
        } catch (e) {
            console.error('Request making error: ', e)
            return null;
        }
    }

    async #getData() {
        try {
            const res = await this.#makeRequest();
            return await res?.json() ?? null;
        } catch (e) {
            console.error('JSON parsing error: ', e)
            return null;
        }
    }


    async fetchData() {
        return await this.#getData();
    }
}
