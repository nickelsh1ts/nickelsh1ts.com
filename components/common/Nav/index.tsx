'use client';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  return (
    <nav
      className={`main flex justify-between sticky top-0 left-0 z-10 bg-surface-alpha backdrop-blur-[5px]`}
    >
      <div className="flex justify-between sticky top-0 left-0 z-10 p-2 w-full">
        <Link
          className="w-11 h-11 grid place-items-center hover:bg-zinc-700 p-1 rounded-md "
          href="/"
        >
          <Image
            src="/apple-touch-icon.png"
            alt="nickelsh1ts"
            width={36}
            height={36}
          />
          <span className="sr-only">nickelsh1ts</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
