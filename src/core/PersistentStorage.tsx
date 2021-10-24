export class PersistentStorage {
    public setItem(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    public getItem(key: string): string {
        return localStorage.getItem(key) as string
    }

    public deleteItem(...keys: string[]) {
        for (const key of keys) {
            localStorage.removeItem(key);
        }
    }
}