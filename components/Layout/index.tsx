'use client';
import PullToRefresh from '@components/Layout/PullToRefresh';
import Footer from '@components/common/Footer';
import Nav from '@components/common/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <img
        src="/android-chrome-512x512.png"
        alt="brand"
        className="watermark-fox"
      />
      <PullToRefresh />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
