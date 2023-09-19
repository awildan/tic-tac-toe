'use client';

import React from 'react';
import { IResult } from '@/container/win/result.types';

export const Result = ({ winner = null, onNewGame }: IResult) => {
  const a = winner;
  return (
    <>
      <div className={'flex items-center justify-center h-screen'}>
        <div
          className={
            'flex md:flex items-center w-[204px] h-[204px] md:w-[444px] md:h-[444px] bg-teal-500 text-gray-800 font-sans text-3xl md:text-7xl font-bold text-center'
          }
        >
          {winner != 'Draw' ? (
            <p>
              Player{' '}
              <span className={`${winner === 'X' ? 'text-gray-800' : 'text-slate-50'}`}>
                {winner}
              </span>{' '}
              Win!
            </p>
          ) : (
            <p>Game is Draw</p>
          )}
          <button
            type="button"
            className={'bg-gray-800 text-slate-50 w-36 h-16 md:text-lg font-medium'}
            onClick={onNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
};
