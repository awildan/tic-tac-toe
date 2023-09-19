'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Box } from '@/components/box';
import { TValue } from '@/components/box.types';
import { IBoard } from '@/container/board/board.types';

const Board = ({ setWinner }: IBoard) => {
  /*
   * Note : This preparation for dynamic board
   * const boxCount = Array.from(Array(boxAmount).keys());
   * const [boxValue, setBoxValue] = useState(Array(boxAmount ** 2).fill(null));
   *
   **/

  const [boxValue, setBoxValue] = useState<TValue[]>(Array(9).fill(null));
  const [isX, setIsX] = useState<boolean>(true);

  const handleClickBox = (position: number) => {
    if (boxValue[position] != null) {
      return;
    }
    const newBoxValue = [...boxValue];
    newBoxValue[position] = isX ? 'X' : 'O';

    setBoxValue([...newBoxValue]);
    setIsX(!isX);
  };

  const isBoxfull = useCallback(() => {
    return !boxValue.some((value) => value === null);
  }, [boxValue]);

  const checkWinStatus = useCallback(() => {
    const winCondition = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (boxValue[a] && boxValue[a] === boxValue[b] && boxValue[a] === boxValue[c]) {
        setWinner(boxValue[a]);
        return;
      }
    }

    if (isBoxfull()) {
      setWinner('Draw');
    }
  }, [boxValue, setWinner, isBoxfull]);

  useEffect(() => {
    if (boxValue) {
      checkWinStatus();
    }
  }, [boxValue, checkWinStatus]);

  return (
    <div className={'flex items-center justify-center min-h-screen caret-transparent'}>
      <div>
        <div className={'flex'}>
          <Box value={boxValue[0]} onClick={() => handleClickBox(0)} />
          <Box value={boxValue[1]} onClick={() => handleClickBox(1)} />
          <Box value={boxValue[2]} onClick={() => handleClickBox(2)} />
        </div>
        <div className={'flex'}>
          <Box value={boxValue[3]} onClick={() => handleClickBox(3)} />
          <Box value={boxValue[4]} onClick={() => handleClickBox(4)} />
          <Box value={boxValue[5]} onClick={() => handleClickBox(5)} />
        </div>
        <div className={'flex'}>
          <Box value={boxValue[6]} onClick={() => handleClickBox(6)} />
          <Box value={boxValue[7]} onClick={() => handleClickBox(7)} />
          <Box value={boxValue[8]} onClick={() => handleClickBox(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
