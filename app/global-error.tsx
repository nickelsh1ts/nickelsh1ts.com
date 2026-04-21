'use client';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'ERROR – nickelsh1ts.com',
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mt-auto text-center">
      <h2 className="text-3xl my-3">Something went wrong!</h2>
      <Link
        className="text-md"
        href={''}
        onClick={
          () => reset()
        }
      >
        Try again
      </Link>
    </main>
  );
}
