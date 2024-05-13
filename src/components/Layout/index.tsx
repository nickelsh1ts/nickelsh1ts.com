'use client';
import PullToRefresh from '@app/components/Layout/PullToRefresh';
import Footer from '@app/components/common/Footer';
import Nav from '@app/components/common/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PullToRefresh />
      <Nav />
      <img
        src="/android-chrome-512x512.png"
        alt="brand"
        className="watermark-fox"
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
