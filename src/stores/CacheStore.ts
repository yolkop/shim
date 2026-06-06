const expiry = 3.6e+6; // 1 hour

class CacheStore {
    private cache: Map<string, [number, [ArrayBuffer, string]]>;

    constructor() {
        this.cache = new Map<string, [number, [ArrayBuffer, string]]>();

        setInterval(() => {
            const now = Date.now();
            for (const [key, [expiryTime]] of this.cache.entries()) {
                if (now >= expiryTime) this.cache.delete(key);
            }
        }, expiry).unref();
    }

    set(key: string, value: [ArrayBuffer, string]): void {
        this.cache.set(key, [Date.now() + expiry, value]);
    }

    get(key: string): [ArrayBuffer, string] | undefined {
        const data = this.cache.get(key);
        if (data) {
            const [expiryTime, value] = data;
            if (Date.now() < expiryTime) return value;
            else this.cache.delete(key);
        }

        return undefined;
    }

    has(key: string): boolean {
        if (this.cache.has(key)) {
            const [expiryTime] = this.cache.get(key) || [0];
            if (Date.now() < expiryTime) return true;
            else this.cache.delete(key);
        }

        return false;
    }
}

const cacheStore = new CacheStore();
export default cacheStore;