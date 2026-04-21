'use client';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Nav from '@components/common/Nav';
import Tabs from '@components/common/Tabs';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <>
      <Nav />
      <Image
        src="/android-chrome-512x512.png"
        alt="brand"
        className="watermark-fox"
        width={612}
        height={512}
        priority
      />
      {!pathname.match(/^\/(links)/) && <Header />}
      <main className="w-content max-w-full mx-auto flex flex-col justify-center pt-4 gap-8">
        {!pathname.match(/^\/(links)/) && (
          <Tabs
            tabs={[
              {
                id: 'feed',
                title: 'Feed',
                href: '/feed',
                regExp: /^\/(feed)?$/,
              },
              {
                id: 'about',
                title: 'About',
                href: '/about',
                regExp: /^\/about/,
              },
              {
                id: 'projects',
                title: 'Projects',
                href: '/projects',
                regExp: /^\/projects/,
              },
              {
                id: 'extras',
                title: 'Extras',
                href: '/extras',
                regExp: /^\/extras/,
              },
            ]}
          />
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
