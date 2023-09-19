import { TResult } from "../win/result.types";

// TODO: Create dynamic board so board can 4x4, 5x5, etc.
export interface IBoard {
    // boxAmount?: number;
    setWinner: React.Dispatch<React.SetStateAction<TResult | undefined>>;
  }