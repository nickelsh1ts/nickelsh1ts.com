import Projects from '@components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - nickelsh1ts.com',
};

export default function ProjectsPage() {
  return <Projects />;
}
