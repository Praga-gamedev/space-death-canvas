export type StartPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IPosition {
    x: number;
    y: number;
    angle?: number;
}

export interface ISize {
    height: number;
    width: number;
}
