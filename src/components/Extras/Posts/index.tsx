import Modal from '@app/components/common/Modal';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';

interface ExtraPostsProps {
  href: string;
  subtitle?: string;
  title: string;
  slug: React.ReactNode;
  image: string;
  attachment: boolean;
  content?: React.ReactNode;
  downloadFile?: string;
  downloadHref?: string;
}

const ExtraPosts: ExtraPostsProps[] = [
  {
    href: '/extras/business-card',
    title: 'Business Card',
    subtitle: 'contact',
    image: '/headshot-200x200.png',
    slug: <p>Feel free to download my contact and take it with you.</p>,
    content: (
      <picture>
        <img
          className="rounded-lg mb-1"
          src="/business-card-back.png"
          alt="Card back"
          width="750"
          height="500"
          decoding="async"
          loading="lazy"
        />
        <img
          className="rounded-lg"
          src="/business-card-front.png"
          alt="Card front"
          width="750"
          height="500"
          decoding="async"
          loading="lazy"
        />
      </picture>
    ),
    attachment: true,
    downloadFile: 'nicholas.wege.vcf',
    downloadHref: '/nicholas.wege.vcf',
  },
  {
    href: '/extras/resume',
    title: 'Resume',
    subtitle: 'pdf',
    image: '/headshot-200x200.png',
    slug: <p>Looking to review my resume? Take a look or download a copy.</p>,
    content: (
      <div className="w-full h-80">
        <Viewer fileUrl="/nicholas.wege.pdf" defaultScale={SpecialZoomLevel.PageWidth} theme={{theme: 'dark'}} />
      </div>
    ),
    attachment: true,
    downloadFile: 'nicholas.wege.pdf',
    downloadHref: '/nicholas.wege.pdf',
  },
  {
    href: '',
    title: 'Funny Story',
    image: '/headshot-200x200.png',
    slug: <p className='mb-3'>My nickname is actually Mouse, but one day my sister called me nickelshits and it just stuck. So here I am branding myself with it.</p>,
    attachment: false,
  },
];

const ExtraFeed = () => {
  const [openModal, setOpenModal] = useState({
    show: false,
    data: {
      title: '',
      subtitle: '',
      slug: null,
      image: '',
      attachment: false,
      content: null,
      downloadFile: '',
      downloadHref: '',
    },
  });

  return (
    <div className="grid gap-4">
      {openModal && (
        <Modal
          show={openModal.show}
          title={openModal.data.title}
          content={openModal.data.content}
          slug={openModal.data.slug}
          image={openModal.data.image}
          attachment={openModal.data.attachment}
          downloadFile={openModal.data.downloadFile}
          downloadHref={openModal.data.downloadHref}
          onClose={() => {
            setOpenModal({
              show: false,
              data: {
                title: openModal.data.title,
                subtitle: openModal.data.subtitle,
                slug: openModal.data.slug,
                image: openModal.data.image,
                attachment: openModal.data.attachment,
                content: openModal.data.content,
                downloadFile: openModal.data.downloadFile,
                downloadHref: openModal.data.downloadHref,
              },
            });
          }}
        />
      )}
      {ExtraPosts.map((extraPost) => (
        <article
          className="card grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full hover:bg-surface-2"
          key={''}
        >
          <Link
            href={extraPost.href}
            className="w-10 h-10"
            onClick={(e) => {
              e.preventDefault();
              setOpenModal({
                show: true,
                data: {
                  title: extraPost.title,
                  subtitle: extraPost.subtitle,
                  slug: extraPost.slug,
                  image: extraPost.image,
                  attachment: extraPost.attachment,
                  content: extraPost.content,
                  downloadFile: extraPost.downloadFile,
                  downloadHref: extraPost.downloadHref,
                },
              });
            }}
          >
            <span className="sr-only">extras feed</span>
            <picture>
              <img
                src={extraPost.image}
                alt="Author"
                className="rounded-full bg-surface-4"
                width="80"
                height="80"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </Link>
          <div className="card__content grid gap-y-1 leading-tight">
            <div className="flex gap-x-2 text-md items-center text-neutral-400">
              <span className="flex items-center gap-1">
                <span className="whitespace-nowrap">
                  <a
                    href={extraPost.href}
                    className="hover:underline font-bold text-text-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenModal({
                        show: true,
                        data: {
                          title: extraPost.title,
                          subtitle: extraPost.subtitle,
                          slug: extraPost.slug,
                          image: extraPost.image,
                          attachment: extraPost.attachment,
                          content: extraPost.content,
                          downloadFile: extraPost.downloadFile,
                          downloadHref: extraPost.downloadHref,
                        },
                      });
                    }}
                  >
                    {extraPost.title}
                  </a>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${extraPost.attachment ? 'block' : 'hidden'} w-4 h-4`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                  />
                </svg>

                <span className={`${extraPost.subtitle ? 'block' : 'hidden'}`}>
                  •
                </span>
                <div className="text-xs font-thin text-neutral-400">
                  {extraPost.subtitle}
                </div>
              </span>
            </div>
            <div>{extraPost.slug}</div>
            <div className={`${extraPost.attachment ? '' : 'hidden'} flex justify-end items-center`}>
              <button
                title="View"
                className="w-10 h-10 grid place-items-center hover:bg-surface-4 rounded-md text-white hover:text-brand-stroke"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal({
                    show: true,
                    data: {
                      title: extraPost.title,
                      subtitle: extraPost.subtitle,
                      slug: extraPost.slug,
                      image: extraPost.image,
                      attachment: extraPost.attachment,
                      content: extraPost.content,
                      downloadFile: extraPost.downloadFile,
                      downloadHref: extraPost.downloadHref,
                    },
                  });
                }}
              >
                <span className="sr-only">View</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExtraFeed;
