'use client';
import React from 'react';
import RootLayout from './layout';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <RootLayout>
      <div>
        <button type="button" onClick={() => router.push('/tic-tac-toe')}>
          {' '}
          Start{' '}
        </button>
      </div>
    </RootLayout>
  );
}
