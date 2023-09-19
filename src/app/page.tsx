'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex md:flex items-center justify-center text-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-sans font-bold leading-loose text-2xl md:text-6xl">
          Welcome to Tic Tac Toe !
        </h1>
        <Link
          href={'/tic-tac-toe'}
          className="bg-gray-950 text-slate-50 font-bold rounded-md mt-6 p-2 w-max text-xs md:text-base"
        >
          <button type="button" className="uppercase">
            {' '}
            Start Game
          </button>
        </Link>
      </div>
    </main>
  );
}
