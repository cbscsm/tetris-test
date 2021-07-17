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
    const newMino = new Array<number[]>(mino.length);
    for (let i = 0; i < mino.length; i++) {
        newMino[i] = new Array<number>(mino.length);
    }
    for (let i = 0; i < mino.length; i++) {
        for (let j = 0; j < mino.length; j++) {
            newMino[i][j] = direction === RotateDirection.Clockwise
                ? mino[mino.length - 1 - j][i]
                : mino[j][mino.length - 1 - i];
        }
    }
    return newMino;
}

export function checkBlockPosition(board: number[][], x: number, y: number, mino: number[][]): boolean {
    for (let i = 0; i < mino.length; i++) {
        for (let j = 0; j < mino.length; j++) {
            if (board[y+i][x+j] !== 0 && mino[i][j] !== 0) return false;
        }
    }
    return true;
}

export function putDataToBoard(board: number[][], x: number, y: number, mino: number[][]): number[][] {
    const newBoard = new Array<number[]>(board.length);
    for (let i = 0; i < board.length; i++) {
        newBoard[i] = new Array<number>(board[i].length);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            newBoard[i][j] = board[i][j];
        }
    }
    for (let i = 0; i < mino.length; i++) {
        for (let j = 0; j < mino.length; j++) {
            if (newBoard[y+i]?.[x+j] !== undefined && mino[i][j] !== 0) newBoard[y+i][x+j] = mino[i][j];
        }
    }
    return newBoard;
}

export function eraseFilledLines(board: number[][]): number[][] {
    const result: number[][] = [];
    return result;
}
