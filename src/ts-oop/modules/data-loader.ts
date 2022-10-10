type Maybe<T> = T | null;


interface DataLoaderResult<T> {
    data: T;
    loading: boolean;
    error: string | null;
}

export class DataLoader {
    private readonly path: string = 'https://634429f0242c1f347f801e41.mockapi.io';
    private readonly options?: RequestInit;

    private loading: boolean = false
    private error: string | null = null;

    constructor(path: string, options?: RequestInit) {
        this.path = `${this.path}/${path}`;
        this.options = options
    }

    private async _getResponse(): Promise<Response | null> {
        try {
            this.loading = true;

            const res = await fetch(this.path, this.options);

            if (!res.ok) {
                this.loading = false;
                this.error = `Response error. Status: ${res.statusText}`
                return null;
            }

            return res;
        } catch (e) {
            this.loading = false
            this.error = `Fetch error: ${e}`;
            return null;
        }
    }

    private async _getData() {
        try {
            const response = await this._getResponse();
            const data = await response?.json() ?? null;
            this.loading = false;

            return data;
        } catch (e) {
            this.loading = false;
            this.error = `JSON parsing error: ${e}`
        }
    }

    async getResult<T>() {
        const data = await this._getData();

        const result: DataLoaderResult<Maybe<T>> = {
            data,
            loading: this.loading,
            error: this.error
        }

        return result;
    }
}
