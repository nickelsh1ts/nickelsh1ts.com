'use client';
import ThemePicker from '@app/components/common/ThemePicker';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      if (window.scrollY > 20) {
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
    <nav
      className={`main flex justify-between sticky top-0 left-0 z-10 ${
        isScrolled ? 'bg-surface-alpha' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(5px)' : undefined,
        WebkitBackdropFilter: isScrolled ? 'blur(5px)' : undefined,
      }}
    >
      <div className="flex justify-between sticky top-0 left-0 z-10 p-2 w-full">
        <a
          className="w-11 h-11 grid place-items-center hover:bg-zinc-700 p-1 rounded-md "
          href="/"
        >
          <img className="" src="/apple-touch-icon.png" alt="nickelsh1ts" />
          <span className="sr-only">nickelsh1ts</span>
        </a>
        <ThemePicker />
      </div>
    </nav>
  );
};

export default Nav;
