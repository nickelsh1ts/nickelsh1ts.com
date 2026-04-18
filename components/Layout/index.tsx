'use client';
import PullToRefresh from '@components/Layout/PullToRefresh';
import Footer from '@components/common/Footer';
import Nav from '@components/common/Nav';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <Image
        src="/android-chrome-512x512.png"
        alt="brand"
        className="watermark-fox"
        width={512}
        height={512}
        priority
      />
      <PullToRefresh />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
