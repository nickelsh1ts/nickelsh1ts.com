import Feed from '@app/components/Feed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About – nickelsh1ts.com',
};

export default function ExtrasPage() {
  return <Feed pageTab={'tab4'} />;
}
