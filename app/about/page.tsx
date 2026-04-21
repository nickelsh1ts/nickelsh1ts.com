import About from '@components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - nickelsh1ts.com',
};

export default function AboutPage() {
  return <About />;
}
