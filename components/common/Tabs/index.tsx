'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface TabsProps {
  id: string;
  title: string;
  href: string;
  regExp: RegExp;
}

const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
  const pathname = usePathname();
  return (
    <div>
      <ul
        className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] items-center text-sm"
        role="tablist"
      >
        {tabs?.map((tab) => {
          const activeTab = pathname.match(tab.regExp);
          return (
            <li
              key={tab.id}
              className="grow hover:bg-zinc-700"
              role="presentation"
            >
              <Link
                href={tab.href}
                className={`${activeTab ? 'active' : ''} font-bold grid place-items-center w-full h-full text-neutral-400 hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700`}
                id={tab.id}
              >
                <span
                  className={`p-2 px-4 border-y-4 border-transparent ${activeTab ? 'border-b-fox' : ''}`}
                >
                  {tab.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
