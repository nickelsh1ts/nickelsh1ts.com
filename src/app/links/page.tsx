import type { Metadata } from 'next';
import LinksPage from '@app/components/LinksPage';

export const metadata: Metadata = {
  title: 'Links – nickelsh1ts.com',
};

const Links = () => {
  return <LinksPage />;
};

export default Links;
