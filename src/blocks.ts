export enum MinoType {
    I = 1,
    J = 2,
    L = 3,
    O = 4,
    S = 5,
    T = 6,
    Z = 7,
}

export const MinoShapes: {[key in MinoType]: number[][]} = {
    [MinoType.I]: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],

    [MinoType.J]: [
        [3, 0, 0],
        [3, 3, 3],
        [0, 0, 0],
    ],

    [MinoType.L]: [
        [0, 0, 2],
        [2, 2, 2],
        [0, 0, 0],
    ],

    [MinoType.O]: [
        [0, 4, 4],
        [0, 4, 4],
        [0, 0, 0],
    ],

    [MinoType.S]: [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
    ],

    [MinoType.T]: [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
    ],

    [MinoType.Z]: [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ],
}

export enum RotateDirection {
    Clockwise = 0,
    CounterClockwise = 1,
}

export function rotate(mino: number[][], direction: RotateDirection = RotateDirection.Clockwise): number[][] {
    const result = new Array<number[]>(mino.length);
    for (let i = 0; i < mino.length; i++) {
        result[i] = new Array<number>(mino.length);
    }
    for (let i = 0; i < mino.length; i++) {
        for (let j = 0; j < mino.length; j++) {
            result[i][j] = direction === RotateDirection.Clockwise
                ? mino[mino.length - 1 - j][i]
                : mino[j][mino.length - 1 - i];
        }
    }
    return result;
}

export function checkBlockPosition(board: number[][], x: number, y: number, mino: number[][]): boolean {

}

export function putDataToBoard(board: number[][], x: number, y: number, mino: number[][]): number[][] {
}

export function eraseFilledLines(board: number[][]): number[][] {
    const result: number[][] = [];
    return result;
}
