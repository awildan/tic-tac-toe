'use client';

import Board from '@/container/board/board';
import { Result } from '@/container/win/result';
import { TResult } from '@/container/win/result.types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [winner, setWinner] = useState<TResult>();

  const handleNewgame = () => {
    setWinner(null);
    router.refresh();
  };

  return winner ? (
    <Result winner={winner} onNewGame={handleNewgame} />
  ) : (
    <Board setWinner={setWinner} />
  );
};

export default Page;
