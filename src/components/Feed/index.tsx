'use client';

import About from '@app/components/Feed/About';
import Extras from '@app/components/Feed/Extras';
import Projects from '@app/components/Feed/Projects';
import Header from 'components/common/Header';
import { useState } from 'react';

type PageTabProps = {
  pageTab: string;
};

export default function Feed({ pageTab }: PageTabProps) {
  const [activeTab, setActiveTab] = useState(pageTab);

  return (
    <>
      <Header />
      <main className="w-content max-w-full mv-0 mx-auto flex flex-col justify-center pt-4 gap-8">
        <div data-tabs="true">
          <ul
            className="max-w-full overflow-auto grid grid-flow-col auto-cols-[1fr] items-center text-sm"
            role="tablist"
          >
            <li className="flex-grow hover:bg-zinc-700" role="presentation">
              <a
                href="#feed"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('tab1');
                }}
                data-tab-active={`${activeTab === 'tab1' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab1' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-neutral-400 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
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
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('tab2');
                }}
                data-tab-active={`${activeTab === 'tab2' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab2' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-neutral-400 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
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
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('tab3');
                }}
                data-tab-active={`${activeTab === 'tab3' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab3' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-neutral-400 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
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
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('tab4');
                }}
                href="#extras"
                data-tab-active={`${activeTab === 'tab4' ? 'true' : 'false'}`}
                className={`${activeTab === 'tab4' ? 'active' : ''} font-bold grid place-items-center w-full h-full text-neutral-400 block hover:no-underline focus-visible:outline-0 focus-visible:bg-zinc-700"`}
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
          <div className="grid gap-4">
            <article
              data-cheep-id="40b8ae1f-5b92-4a6f-a8a2-ce99de8d7ef0"
              className="card grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full hover:bg-surface-2"
            >
              <div className="w-10 grid justify-end text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"
                  ></path>
                </svg>
              </div>
              <div className="items-center text-sm text-neutral-400 font-thin">
                Pinned
              </div>
              <a href="/feed" className="w-10 h-10">
                <span className="sr-only">Nickelsh1ts&apos; feed</span>
                <picture>
                  <img
                    src="/headshot-200x200.png"
                    alt="Author"
                    className="rounded-full bg-surface-4"
                    width="80"
                    height="80"
                    decoding="async"
                    loading="lazy"
                  />
                </picture>
              </a>
              <div className="card__content grid gap-y-1 leading-tight">
                <div className="flex gap-x-2 text-md items-center text-neutral-400">
                  <a
                    href="/about"
                    className="hover:underline font-bold text-text-1"
                  >
                    Nickelsh1ts ✈
                  </a>
                  <span>•</span>
                  <time className="text-xs font-thin text-neutral-400">
                    21 Apr 2024
                  </time>
                </div>
                <div>
                  <div className="py-1 px-3 inline-flex items-center gap-1 bg-surface-4 inline rounded-full">
                    <span role="img" aria-hidden="true">
                      👽
                    </span>
                    <span className="text-sm font-bold">
                      Feelin&apos; alive
                    </span>
                  </div>
                </div>
                <h2 className="mb-1 font-bold text-2xl">Hello World!</h2>
                <p className="mb-4">
                  This is my site where I try and post about what I&apos;m up to
                  and how to reach out to me.
                </p>
                <picture>
                  <img
                    className="rounded-lg"
                    src="/nick-with-his-dog.jpg"
                    alt="Nick with his dog"
                    width="750"
                    height="500"
                    decoding="async"
                    loading="lazy"
                  />
                </picture>
                <div className="card__actions flex justify-end items-center">
                  <a
                    title="Permalink"
                    className="w-10 h-10 grid place-items-center hover:bg-surface-4 rounded-md text-white hover:text-brand-stroke"
                    href="/feed"
                  >
                    <span className="sr-only">Permalink</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <button
                    title="Like post"
                    disabled={true}
                    className="w-10 h-10 grid place-items-center rounded-md text-text-2 opacity-20"
                  >
                    <span className="sr-only">Like</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
        <About activeTab={activeTab} />
        <Projects activeTab={activeTab} />
        <Extras activeTab={activeTab} />
      </main>
    </>
  );
}
