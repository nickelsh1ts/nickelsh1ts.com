import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type React from 'react';

interface Props {
  subtitle?: string;
  title?: string;
  content?: React.ReactNode;
  image: string;
  attachment: boolean;
  show: boolean;
  onClose?: () => void;
  slug: React.ReactNode;
}

export default function Modal({
  title,
  content,
  slug,
  image,
  show,
  onClose,
  attachment,
}: Props) {
  const modalRef = useRef();

  return (
    <Transition.Root show={show} as={Fragment} ref={modalRef}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={modalRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-surface-alpha transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-lg border border-fox">
                <div className="absolute pt-1 pr-1 top-0 right-0">
                  <button
                    type="button"
                    className="btn hover:bg-zinc-700 p-1 rounded-md"
                    onClick={onClose}
                  >
                    <span className="absolute w-1 h-1 p-0 -m-1 whitespace-nowrap border-0 sr-only">
                      Close
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="bg-[#16191d] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-transparent sm:mx-0 sm:h-10 sm:w-10">
                      <p className="w-10 h-10">
                        <span className="sr-only">{title}</span>
                        <picture>
                          <img
                            src={image}
                            alt="Author"
                            className="rounded-full bg-surface-4"
                            width="80"
                            height="80"
                            decoding="async"
                            loading="lazy"
                          />
                        </picture>
                      </p>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-fox"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">{slug}</div>
                      <div className="mt-2">{content}</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-[#16191d] px-4 py-3 sm:px-6 gap-2 ${attachment ? 'sm:flex sm:flex-row-reverse' : 'hidden'}`}
                >
                  <button
                    type="button"
                    className="inline-flex w-full justify-center hover:no-underline border-transparent focus:border-white outline-transparent focus-visible:border-white hover:border-white border-4 rounded-full text-fluid--1 flex gap-x-1 items-center text-white bg-brand-fill px-3 py-1 sm:mt-0 sm:w-auto"
                  >
                    Download
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
