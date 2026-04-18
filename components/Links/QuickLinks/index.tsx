'use client';
const QuickLinks = () => {
  const shareData = {
    title: 'nickelsh1ts.com',
    text: 'Take a look at my links here:',
    url: '/links',
  };

  async function onShare() {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('oops something went wrong');
    }
  }
  return (
    <div className="w-content max-w-max mx-auto grid grid-cols-3 gap-3 px-4 md:px-0 mb-3">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:nicholas.wege@nickelsh1ts.com"
          className="text-white w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <title>Email icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </a>
        <p className="text-sm text-center">Email</p>
      </div>
      <div>
        <button
          className="text-white w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700 mx-auto"
          onClick={onShare}
        >
          <svg
            fill="currentColor"
            strokeWidth={1}
            className="w-7 h-7 pb-0.5"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Share icon</title>
            <path d="M28.183 29.668h-26v-20h8.050l2.023-1.948-0.052-0.052h-10.021c-1.105 0-2 0.896-2 2v20c0 1.105 0.895 2 2 2h26c1.105 0 2-0.895 2-2v-15.646l-2 1.909v13.737zM8.442 21.668l2.015-0c1.402-7.953 8.329-14 16.684-14 0.351 0 0.683 0.003 1.019 0.005l-3.664 3.664c-0.39 0.39-0.39 1.024 0 1.414 0.195 0.196 0.452 0.293 0.708 0.293s0.511-0.098 0.706-0.293l5.907-6.063-5.907-6.064c-0.39-0.391-1.023-0.391-1.414 0-0.39 0.391-0.39 1.024 0 1.414l3.631 3.63c-0.314-0-0.624-0.002-0.944-0.002-9.47 0-17.299 6.936-18.741 16.001z"></path>
          </svg>
        </button>
        <p className="text-sm text-center">Share</p>
      </div>
      <div>
        <a
          className="text-white w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700 mx-auto"
          href="https://www.patreon.com/Nickelsh1ts"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 436 476"
          >
            <title>Patreon logo</title>
            <path d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path>
          </svg>
        </a>
        <p className="text-sm text-center">Patreon</p>
      </div>
    </div>
  );
};

export default QuickLinks;
