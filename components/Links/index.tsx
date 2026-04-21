import Header from '@components/Links/Header';
import LinksList from '@components/Links/LinksList';
import QuickLinks from '@components/Links/QuickLinks';

export default function Links() {
  return (
    <main className="main">
      <Header />
      <QuickLinks />
      <LinksList />
    </main>
  );
}
