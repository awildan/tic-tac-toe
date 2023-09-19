import { TValue } from "@/components/box.types";

export type TResult = TValue | 'Draw';
export interface IResult {
   winner : TResult;
   onNewGame: () => void;
}