import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 – nickelsh1ts.com',
};

export default function NotFound() {
  return (
    <main className="mt-auto text-center">
      <h1 className="text-9xl">404</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
