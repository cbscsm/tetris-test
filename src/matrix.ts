class OutOfMatrix extends Error {}

export abstract class AbstractMatrix {
    protected constructor(public readonly rows: number,
                          public readonly columns: number,
                          ...values: number[]) {}
    protected checkIndex(i: number, j: number): void {
        if (i >= this.rows || j >= this.columns) throw new OutOfMatrix();
    }

    public abstract get(i: number, j: number): number;
    public abstract set(i: number, j: number, v: number): void;
}

export class SingleArrayMatrix extends AbstractMatrix {
    private readonly _values: number[];
    constructor(rows: number, columns: number, ...values: number[]) {
        super(rows, columns);
        this._values = new Array<number>(rows * columns).fill(0);
        for (let i = 0; i < rows * columns && i < values.length; i++) {
            this._values[i] = values[i];
        }
    }

    get(i: number, j: number): number {
        this.checkIndex(i, j);
        return this._values[i * this.columns + j];
    }

    set(i: number, j: number, v: number): void {
        this.checkIndex(i, j);
        this._values[i * this.columns + j] = v;
    }
}

export class NestedArrayMatrix extends AbstractMatrix {
    private readonly _values: number[][];
    constructor(rows: number, columns: number, ...values: number[]) {
        super(rows, columns);
        this._values = new Array<number[]>(rows);
        for (let i = 0; i < rows; i++) {
            this._values[i] = new Array<number>(columns).fill(0);
        }
    }

    get(i: number, j: number): number {
        this.checkIndex(i, j);
        return this._values[i][j];
    }

    set(i: number, j: number, v: number): void {
        this.checkIndex(i, j);
        this._values[i][j] = v;
    }
}
