export type TValue = 'X' | 'O' | null;

export interface IBox {
    value: TValue;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    // onClick:  React.MouseEventHandler<HTMLDivElement>
    index?: number;
}