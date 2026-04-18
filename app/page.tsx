import Feed from '@components/Feed';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Feed – nickelsh1ts.com',
};

const Index: NextPage = () => {
  return <Feed pageTab={'tab1'} />;
};

export default Index;
