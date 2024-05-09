import Date from '@app/components/common/Date';
import { getPostData } from '@app/lib/posts';
import Link from 'next/link';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
  tag: string;
  emoji: string;
  pinned: boolean;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title + ' - nickelsh1ts.com',
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <main className="w-content max-w-full mv-0 m-auto flex flex-col justify-center pt-4 gap-8">
      <div className="grid gap-4">
        <article
          className="card grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full bg-surface-2 border border-neutral-700 border-1"
          key={params.id}
        >
          <Link href="/feed" className="w-10 h-10">
            <span className="sr-only">nickelsh1ts&apos; feed</span>
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
          </Link>
          <div className="card__content grid gap-y-1 leading-tight">
            <div className="flex gap-x-2 text-md items-center text-neutral-400">
              <a
                href="/about"
                className="hover:underline font-bold text-text-1"
              >
                nickelsh1ts ✈️
              </a>
              <span>•</span>
              <time className="text-xs font-thin text-neutral-400">
                <Date dateString={postData.date} />
              </time>
            </div>
            <div>
              <div className="py-1 px-3 inline-flex items-center gap-1 bg-surface-4 inline rounded-full">
                <span role="img" aria-hidden="true">
                  {postData.emoji}
                </span>
                <span className="text-sm font-bold">{postData.tag}</span>
              </div>
            </div>
            <h2 className="mb-1 font-bold text-2xl">{postData.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            ></div>
            <div className="card__actions flex justify-end items-center">
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
    </main>
  );
}
