export const rotateMatrixLeft = (a: boolean[][]): boolean[][] => a[0].map((_, c) => a.map(r => r[c])).reverse();
export const rotateMatrix90 = <T>(a: T[][]): T[][] => a[0].map((_, c) => a.map(r => r[c]).reverse());
export const rotateMatrix180 = <T>(a: T[][]): T[][] => rotateMatrix90(rotateMatrix90(a))
export const rotateMatrix270 = <T>(a: T[][]): T[][] => rotateMatrix180(rotateMatrix90(a))
