'use client';

import React from 'react';
import { IBox } from '@/components/box.types';

export const Box = ({ value, onClick }: IBox) => {
  return (
    <button
      type="button"
      className={`flex sm:flex m-0.5 bg-teal-500 w-16 h-16 sm:w-36 sm:h-36 items-center justify-center font-sans text-3xl sm:text-7xl font-bold text-center ${
        value == 'X' ? 'text-slate-50' : 'text-gray-800'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
