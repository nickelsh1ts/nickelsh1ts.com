import Header from '@app/components/LinksPage/Header';
import LinksList from '@app/components/LinksPage/Links';
import QuickLinks from '@app/components/LinksPage/QuickLinks';

export default function Links() {
  return (
    <main className="main">
      <Header />
      <QuickLinks />
      <LinksList />
    </main>
  );
}
