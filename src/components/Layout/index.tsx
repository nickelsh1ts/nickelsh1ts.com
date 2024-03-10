import PullToRefresh from '@app/components/Layout/PullToRefresh';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      if (window.pageYOffset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolled);
    };
  }, []);

  return (
    <div className="">
      <PullToRefresh />
      <div
        className={`searchbar fixed left-0 right-0 top-0 z-10 flex flex-shrink-0 bg-opacity-80 transition duration-300 ${
          isScrolled ? 'bg-purple-700' : 'bg-transparent'
        } lg:left-64`}
        style={{
          backdropFilter: isScrolled ? 'blur(5px)' : undefined,
          WebkitBackdropFilter: isScrolled ? 'blur(5px)' : undefined,
        }}
      ></div>

      <main className="" tabIndex={0}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
