export function lastOf<T>(ar: T[]): T | undefined {
    return ar.slice(-1)[0]
}
