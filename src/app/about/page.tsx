import Feed from '@app/components/Feed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About – nickelsh1ts.com',
};

export default function AboutPage() {
  return <Feed pageTab={'tab2'} />;
}
