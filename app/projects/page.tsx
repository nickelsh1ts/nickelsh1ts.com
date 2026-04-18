import Feed from '@components/Feed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – nickelsh1ts.com',
};

export default function ProjectsPage() {
  return <Feed pageTab={'tab3'} />;
}
