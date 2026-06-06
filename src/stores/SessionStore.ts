class SessionStore {
    private sessions: Map<string, string[]>;

    constructor() {
        this.sessions = new Map<string, string[]>();
    }

    set(id: string, data: string[]): void {
        this.sessions.set(id, data);
        setTimeout(() => this.sessions.delete(id), 30_000).unref();
    }

    get(id: string): string[] | undefined {
        return this.sessions.get(id);
    }

    has(id: string): boolean {
        return this.sessions.has(id);
    }

    delete(id: string): void {
        this.sessions.delete(id);
    }

    size(id: string | undefined): number {
        return (id && this.sessions.get(id)?.length) || 0;
    }
}

const sessionStore = new SessionStore();
export default sessionStore;