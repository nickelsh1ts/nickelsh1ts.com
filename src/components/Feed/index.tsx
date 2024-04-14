'use client';

import About from '@app/components/Feed/About';
import Extras from '@app/components/Feed/Extras';
import Projects from '@app/components/Feed/Projects';
import Header from 'components/common/Header';
import { useState } from 'react';

export default function Feed() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
      <Header />
      <main className="w-content max-w-full mv-0 mx-auto flex flex-col justify-center pt-4 gap-8">
        <div data-tabs="true">
          <ul
            className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] items-center text-fluid--1"
            role="tablist"
          >
            <li className="flex-grow hover:bg-zinc-700" role="presentation">
              <a
                href="#feed"
                onClick={() => setActiveTab('tab1')}
                data-tab-active={`${activeTab === 'tab1' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab1' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-text-4 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
                role="tab"
                id="tab1"
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-selected={`${activeTab === 'tab1' ? 'true' : 'false'}`}
              >
                <span
                  className={`p-2 px-4 border-y-4 border-transparent ${activeTab === 'tab1' ? 'border-b-brand-stroke' : ''}`}
                >
                  Feed
                </span>
              </a>
            </li>
            <li className="flex-grow hover:bg-zinc-700" role="presentation">
              <a
                href="#about"
                onClick={() => setActiveTab('tab2')}
                data-tab-active={`${activeTab === 'tab2' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab2' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-text-4 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
                role="tab"
                id="tab2"
                tabIndex={-1}
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-selected={`${activeTab === 'tab2' ? 'true' : 'false'}`}
              >
                <span
                  className={`p-2 px-4 border-y-4 border-transparent ${activeTab === 'tab2' ? 'border-b-brand-stroke' : ''}`}
                >
                  About
                </span>
              </a>
            </li>
            <li className="flex-grow hover:bg-zinc-700" role="presentation">
              <a
                href="#projects"
                onClick={() => setActiveTab('tab3')}
                data-tab-active={`${activeTab === 'tab3' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab3' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-text-4 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
                role="tab"
                id="tab3"
                tabIndex={-1}
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-selected={`${activeTab === 'tab3' ? 'true' : 'false'}`}
              >
                <span
                  className={`p-2 px-4 border-y-4 border-transparent ${activeTab === 'tab3' ? 'border-b-brand-stroke' : ''}`}
                >
                  Projects
                </span>
              </a>
            </li>
            <li className="flex-grow hover:bg-zinc-700" role="presentation">
              <a
                onClick={() => setActiveTab('tab4')}
                href="#extras"
                data-tab-active={`${activeTab === 'tab4' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab4' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-text-4 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
                role="tab"
                id="tab4"
                tabIndex={-1}
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-selected={`${activeTab === 'tab4' ? 'true' : 'false'}`}
              >
                <span
                  className={`p-2 px-4 border-y-4 border-transparent ${activeTab === 'tab4' ? 'border-b-brand-stroke' : ''}`}
                >
                  Extras
                </span>
              </a>
            </li>
          </ul>
        </div>
        <section
          data-tab-panel="true"
          id="/feed"
          className={`${activeTab === 'tab1' ? 'block' : 'hidden'}`}
          role="tabpanel"
          tabIndex={-1}
          aria-labelledby="tab1"
        >
          <div className="grid gap-4">Feed...</div>
        </section>
        <About activeTab={activeTab} />
        <Projects activeTab={activeTab} />
        <Extras activeTab={activeTab} />
      </main>
    </>
  );
}
