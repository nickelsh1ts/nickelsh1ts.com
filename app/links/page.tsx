import type { Metadata } from 'next';
import LinksPage from '@components/Links';

export const metadata: Metadata = {
  title: 'Links - nickelsh1ts.com',
};

const Links = () => {
  return <LinksPage />;
};

export default Links;
