/**
 * 配列の最後の要素を返す。
 * 配列が空の場合は Error を投げる。
 * @param ar
 */
export function lastOf<T>(ar: T[]): T {
    if (ar.length === 0) {
        throw Error("空の配列から要素を取得することはできない")
    }
    return ar.slice(-1)[0]
}

/**
 * 配列の最初の要素を削除し、残りの配列を返す。
 * 配列が空の場合は空の配列を返す。
 * @param ar
 */
export function removeFirstOf<T>(ar: T[]): T[] {
    return ar.slice(1)
}

/**
 * 配列の最後から n 個の要素を削除し、残りの配列を返す。
 * 配列が空の場合は空の配列を返す。
 * @param ar
 * @param n
 */
export function removeLastOf<T>(ar: T[], n: number): T[] {
    return ar.slice(0, -n)
}
