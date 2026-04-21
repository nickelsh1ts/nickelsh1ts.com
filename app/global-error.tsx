'use client';
import { useEffect } from 'react';

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
    <html lang="en-CA" data-theme="fox">
      <body className="flex flex-col min-h-dvh">
        <main className="mt-auto text-center">
          <h2 className="text-3xl my-3">Something went wrong!</h2>
          <button
            type="button"
            className="text-md"
            onClick={() => reset()}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
