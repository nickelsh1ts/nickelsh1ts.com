'use client';

const Header = () => {
  return (
    <header className="w-feature max-w-full mx-auto">
      <div className="w-full aspect-[3/1] bg-zinc-4 h-2/4 overflow-hidden">
        <video
          className="w-full"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="mp4/bg-v1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-content max-w-full mv-0 mx-auto grid gap-0 px-4">
        <div className="relative flex justify-end items-center min-h-half-avatar py-2 my-2">
          <picture className="">
            <div className="absolute bg-contain bg-no-repeat top-0 transform -translate-y-1/2 left-0 rounded-full aspect-square w-36 h-36 border-4 border-white bg-[url('/headshot-200x200.png')] hover:bg-[url('/logo_glitch.svg')] hover:border-0 hover:bg-contain hover:bg-right hover:w-48 hover:h-44 hover:-left-5" />
          </picture>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline border-transparent focus:border-white outline-transparent focus-visible:border-white hover:border-white border-4 rounded-full text-fluid--1 flex gap-x-1 items-center text-white bg-brand-fill px-3 py-1"
          >
            <span className="font-bold">Follow</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 130 130"
            >
              <path
                fill="url(#c)"
                d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
              />
              <path
                fill="url(#d)"
                d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
              />
              <path
                fill="#fff"
                d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
              />
            </svg>
          </a>
        </div>
        <h1 className="text-fluid-3 flex gap-x-2 items-center font-bold my-0">
          Nicholas Wege
          <span className="w-10 aspect-square inline-block">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt"
              height="20.000000pt"
              viewBox="0 0 350.000000 350.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"
                fill="#F58A07"
                stroke="none"
              >
                <path d="M764 2265 c19 -45 19 -114 0 -159 -17 -42 -22 -46 -54 -47 -19 -1 -48 -5 -65 -9 -27 -7 -25 -8 18 -9 65 -1 51 -21 -16 -22 -45 -1 -48 -2 -22 -9 29 -7 29 -8 5 -10 -16 -2 -8 -5 20 -9 45 -6 45 -6 20 -21 -17 -9 -72 -16 -165 -20 l-140 -7 150 -1 c90 -2 144 -6 136 -11 -7 -5 -11 -13 -7 -19 3 -5 -10 -13 -32 -17 -51 -9 -61 -18 -32 -26 23 -6 22 -7 -10 -9 l-35 -2 30 -8 c23 -6 25 -8 8 -9 -30 -1 -40 -21 -11 -21 22 -1 22 -1 4 -15 -15 -11 -53 -16 -145 -17 -117 -2 -119 -2 -32 -5 62 -3 98 -8 107 -18 22 -21 17 -32 -18 -40 l-33 -8 35 -6 35 -6 -28 -22 c-15 -12 -26 -26 -25 -31 2 -6 -6 -17 -16 -25 -15 -11 -17 -18 -8 -33 15 -27 -13 -69 -57 -87 l-36 -15 32 -7 c30 -7 31 -9 21 -39 -5 -17 -14 -40 -19 -51 -5 -11 -8 -29 -8 -40 1 -11 -2 -56 -6 -100 -11 -123 -12 -176 -3 -181 4 -3 8 -20 8 -37 0 -18 4 -47 9 -65 6 -21 6 -32 0 -32 -6 0 -7 -6 -2 -12 13 -20 33 -81 33 -100 0 -13 -8 -18 -27 -18 -55 0 -54 -16 2 -35 35 -11 55 -24 56 -34 0 -9 9 -29 19 -46 21 -33 50 -94 50 -104 0 -4 -17 -12 -37 -17 l-38 -10 59 -18 c52 -16 116 -56 90 -56 -5 0 6 -10 24 -21 17 -12 32 -25 32 -29 0 -5 -28 -15 -62 -22 l-63 -12 61 -7 c77 -9 144 -27 144 -38 0 -12 -57 -31 -93 -31 -49 0 -28 -7 53 -19 100 -14 142 -27 175 -53 l28 -22 -24 -10 c-24 -10 -24 -10 6 -13 56 -7 62 -15 20 -28 -38 -11 -35 -12 67 -17 72 -3 114 -10 130 -20 29 -19 195 -48 275 -48 45 0 85 -10 164 -39 127 -48 211 -65 258 -51 39 11 71 37 71 57 0 7 12 18 28 23 56 21 76 36 91 70 32 69 51 90 85 91 26 0 28 2 11 9 -18 7 -17 8 10 15 17 4 49 13 73 21 23 8 52 14 62 14 30 0 24 14 -12 30 -32 14 -30 14 67 20 l100 6 -94 2 c-180 4 -78 17 172 23 l252 5 -245 2 c-221 2 -243 4 -225 18 11 8 30 24 43 34 12 11 28 20 36 20 8 0 23 3 33 7 16 6 15 8 -7 14 -22 6 -23 7 -4 8 14 1 24 10 28 25 4 17 15 26 34 29 l27 4 -27 2 c-16 0 -28 5 -28 9 0 14 35 42 53 42 20 0 31 17 15 22 -7 3 7 8 32 12 33 5 41 9 30 16 -8 5 -25 10 -37 10 -23 0 -31 14 -14 25 6 3 13 27 16 53 4 26 14 52 22 59 9 7 16 33 18 64 1 29 7 55 13 57 5 1 8 11 5 22 -3 10 0 51 7 91 14 80 17 222 6 256 -6 19 -2 25 21 34 22 9 25 12 11 18 -27 10 -56 54 -60 91 l-3 34 74 13 c40 6 75 14 78 17 2 2 -20 7 -49 10 -126 16 -128 16 -118 35 7 14 3 22 -19 39 -40 29 -46 59 -14 67 31 7 23 17 -25 30 -20 6 -36 15 -35 20 1 6 -5 17 -12 25 -30 33 -37 79 -40 245 -2 94 -7 181 -12 194 -9 23 -10 23 -36 -20 -14 -24 -45 -66 -69 -93 -35 -40 -48 -48 -64 -42 -19 8 -19 8 1 16 20 7 20 7 0 13 -11 3 -36 9 -55 12 -45 9 -92 33 -85 44 2 5 -15 14 -40 20 -56 14 -68 31 -21 31 20 0 36 4 36 8 0 18 -49 31 -154 42 -61 6 -119 17 -130 23 -36 20 -411 22 -498 3 -40 -8 -125 -19 -188 -23 -88 -5 -105 -9 -73 -13 60 -9 63 -17 9 -25 -46 -7 -47 -7 -123 56 -45 37 -74 55 -69 44z m169 -183 c28 -36 59 -76 67 -88 8 -12 50 -70 93 -130 143 -197 225 -362 253 -502 21 -109 19 -129 -14 -146 l-28 -14 -49 105 c-122 258 -167 345 -234 447 -71 109 -123 225 -136 304 -4 23 -10 42 -13 42 -8 0 -63 -129 -91 -212 -56 -163 -64 -404 -21 -573 23 -94 47 -120 185 -201 47 -27 85 -53 85 -57 0 -11 -161 -207 -170 -207 -5 0 -22 17 -40 37 -119 135 -175 311 -174 543 1 188 35 358 119 597 25 70 45 138 45 151 l0 23 35 -27 c20 -15 59 -56 88 -92z m604 92 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-274 -21 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-316 -20 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m194 -9 c-18 -8 -36 -13 -39 -10 -6 7 37 25 58 25 8 -1 0 -7 -19 -15z m616 -1 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m73 -18 c22 -13 23 -14 5 -14 -11 0 -29 6 -39 14 -26 20 0 20 34 0z m-753 -2 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m1179 -129 c-20 -60 -64 -165 -99 -234 -66 -131 -224 -401 -239 -411 -6 -3 -9 -9 -8 -13 1 -4 -6 -26 -15 -51 l-17 -44 -64 57 c-73 65 -168 125 -235 149 l-46 16 165 124 c218 164 388 309 498 426 49 52 90 94 92 92 2 -1 -13 -51 -32 -111z m-1226 91 c0 -8 -6 -15 -14 -15 -17 0 -28 14 -19 24 12 12 33 6 33 -9z m950 -35 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-43 -27 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m40 -10 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m88 -24 l40 -20 -35 7 c-19 4 -44 13 -55 20 -30 22 3 17 50 -7z m-48 -46 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m279 -175 c-31 -322 -113 -554 -241 -680 -21 -21 -41 -38 -45 -38 -3 0 -13 13 -22 28 l-17 28 61 60 c103 101 220 294 178 294 -5 0 -2 19 6 42 23 65 61 242 75 352 20 149 22 98 5 -86z m-1349 67 c73 -91 236 -378 257 -451 5 -17 0 -24 -24 -34 -16 -7 -30 -14 -30 -15 0 -1 7 -22 15 -45 8 -23 15 -46 15 -51 0 -5 -23 -9 -51 -9 -46 0 -50 -2 -44 -20 9 -29 -2 -24 -19 8 -8 16 -43 64 -78 108 -82 102 -111 144 -105 150 6 7 59 -20 115 -58 23 -16 42 -24 42 -18 0 6 -7 13 -17 17 -9 3 -41 21 -71 40 -79 47 -102 43 -65 -13 11 -17 17 -51 19 -107 2 -73 1 -80 -12 -63 -26 36 -53 124 -64 207 -9 78 -4 219 9 219 10 -1 171 -239 171 -254 0 -7 9 -16 20 -19 11 -3 20 -2 20 2 0 20 -38 131 -91 268 -32 83 -59 157 -59 162 0 21 19 11 47 -24z m1310 -107 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-1634 -20 c-3 -13 -15 -31 -27 -40 -17 -14 -19 -19 -8 -29 30 -31 3 -40 -30 -9 l-21 20 26 20 c15 12 27 28 27 35 0 7 8 16 18 18 9 3 18 5 19 6 0 0 -1 -9 -4 -21z m1612 -88 c-9 -45 -25 -105 -35 -133 -10 -29 -21 -61 -25 -72 -6 -16 -5 -17 4 -5 22 30 10 -4 -21 -62 -46 -87 -104 -145 -152 -153 l-39 -6 61 66 c72 79 136 201 184 350 18 57 34 102 36 100 2 -2 -4 -40 -13 -85z m113 8 c9 -21 20 -38 25 -38 12 0 8 -38 -5 -43 -9 -3 -7 -10 7 -21 16 -12 17 -17 7 -24 -11 -8 -11 -10 2 -15 9 -4 16 -13 16 -20 0 -8 7 -20 15 -27 21 -17 19 -30 -4 -30 -11 0 -21 -6 -24 -12 -2 -8 -8 -9 -13 -4 -5 5 -4 11 4 13 17 6 15 30 -3 37 -8 3 -15 12 -15 20 0 8 -8 20 -17 25 -17 10 -17 10 0 11 15 0 16 3 5 23 -7 12 -11 28 -9 35 1 8 -4 28 -12 45 -9 20 -13 46 -9 67 4 23 7 28 9 15 2 -11 12 -37 21 -57z m-1792 -43 c-3 -14 -9 -37 -12 -52 -4 -16 -15 -40 -25 -55 -23 -31 -25 -67 -4 -74 12 -5 12 -9 -5 -23 -22 -19 -39 -119 -29 -171 4 -20 3 -40 -3 -47 -6 -7 -7 -26 -2 -45 4 -18 7 -41 5 -50 -2 -17 9 -64 24 -100 5 -14 2 -18 -13 -18 -24 0 -45 45 -48 104 -1 22 -5 53 -9 68 -4 15 -4 32 0 39 4 6 8 50 8 98 0 101 1 107 36 126 l26 14 -22 7 c-29 8 -30 37 -3 71 11 14 20 35 20 47 0 12 7 32 16 44 8 12 12 22 7 22 -11 0 19 20 31 20 4 0 6 -11 2 -25z m959 -165 c23 -11 52 -30 65 -42 14 -13 27 -22 30 -20 11 5 106 -64 147 -106 50 -53 72 -95 82 -163 l8 -51 -30 6 c-16 3 -69 6 -118 6 -56 0 -89 4 -89 11 0 5 -24 60 -54 122 -54 111 -145 237 -172 237 -8 0 -14 5 -14 10 0 18 102 11 145 -10z m926 -65 c6 -20 4 -32 -4 -37 -9 -6 -7 -11 6 -19 19 -11 23 -35 6 -41 -7 -2 -7 -12 -1 -29 13 -32 6 -200 -9 -248 -7 -20 -18 -52 -25 -71 -7 -19 -15 -48 -16 -65 -2 -21 -12 -36 -35 -50 -18 -11 -32 -26 -33 -33 0 -10 -3 -10 -14 0 -12 11 -12 14 3 22 28 17 41 34 41 56 0 12 11 54 25 93 13 40 26 95 28 123 2 28 7 56 11 63 4 6 3 18 -4 26 -8 10 -8 19 -1 34 11 20 5 51 -13 63 -7 5 -7 8 2 8 6 0 12 11 12 25 0 14 -4 25 -8 25 -4 0 -9 21 -10 46 -1 37 1 45 15 42 9 -2 20 -16 24 -33z m-1005 -132 c-3 -8 -2 -11 4 -8 18 11 76 -142 84 -220 2 -22 6 -47 9 -55 3 -8 7 -32 9 -52 l4 -37 -42 39 c-48 44 -94 70 -124 70 -27 0 -26 -26 3 -41 12 -7 50 -32 84 -57 33 -24 65 -44 69 -43 11 3 22 -28 23 -63 l1 -30 -32 31 c-66 62 -135 83 -301 92 -64 3 -117 3 -117 0 0 -3 16 -24 36 -47 l35 -42 -30 6 c-39 8 -42 -11 -3 -20 15 -4 79 -38 142 -75 86 -52 128 -70 165 -75 107 -13 136 -30 221 -126 73 -83 95 -102 94 -82 -1 4 -30 39 -65 77 -36 39 -60 71 -55 73 5 2 -1 19 -12 38 l-21 35 23 24 c20 22 32 25 91 25 l67 0 11 -49 c16 -76 46 -146 84 -198 19 -26 39 -58 45 -70 11 -20 10 -21 -27 -16 -29 4 -52 -1 -85 -17 l-46 -22 -64 22 c-36 12 -86 38 -113 58 -79 60 -242 150 -348 191 -140 55 -365 99 -365 72 0 -5 25 -26 55 -46 30 -21 55 -39 55 -41 0 -5 -92 27 -184 64 -99 40 -99 40 -63 47 42 8 44 12 53 123 7 83 12 94 34 67 7 -8 18 -15 24 -14 6 0 37 33 69 73 32 41 87 103 123 140 35 36 64 70 64 74 0 5 30 15 68 24 87 19 96 22 102 28 11 12 98 59 102 55 2 -2 2 12 0 33 l-4 37 26 -29 c15 -15 25 -35 22 -43z m512 -152 c29 -45 62 -120 62 -142 0 -5 -7 -9 -15 -9 -8 0 -29 -13 -47 -29 l-33 -29 0 129 c0 71 0 129 1 129 0 0 15 -22 32 -49z m-150 -57 c35 -4 50 -9 45 -17 -4 -6 -6 -30 -4 -52 1 -22 -5 -73 -14 -113 -15 -66 -15 -75 -2 -90 14 -15 14 -20 -2 -41 -17 -23 -22 -24 -93 -17 -67 6 -76 4 -93 -14 -26 -29 -35 -25 -35 18 0 29 5 39 23 47 17 8 24 21 29 65 7 47 -3 157 -18 211 -5 16 27 17 164 3z m-181 -31 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m10 -45 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-198 -8 c45 -22 117 -87 108 -96 -3 -4 -23 7 -44 23 -21 17 -57 41 -80 54 -68 38 -54 55 16 19z m-879 3 c-32 -12 -40 -24 -29 -45 10 -18 8 -19 -13 -13 -38 12 -40 28 -5 47 18 9 39 17 47 17 13 -1 13 -1 0 -6z m1075 -105 c6 -58 5 -69 -10 -74 -21 -8 -31 3 -38 44 -5 25 -3 32 9 32 11 0 15 9 14 33 -3 46 -1 52 9 42 5 -6 12 -40 16 -77z m12 60 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m387 6 c10 -26 7 -32 -12 -27 -11 2 -35 -2 -55 -11 -45 -18 -46 -13 -6 25 34 32 64 37 73 13z m-131 -2 c3 -4 3 -19 0 -35 -4 -20 -11 -27 -29 -27 -27 0 -29 7 -14 44 9 25 33 35 43 18z m-1309 -47 c-4 -8 -10 -15 -16 -15 -5 0 -8 -6 -7 -12 3 -28 -2 -38 -21 -38 -11 0 -20 5 -20 10 0 6 5 10 11 10 6 0 9 6 7 12 -3 7 5 20 16 30 26 22 37 23 30 3z m1441 9 c26 -10 -11 -44 -49 -44 -17 0 -42 -7 -54 -16 -18 -12 -22 -13 -22 -1 0 17 27 43 60 56 30 12 43 13 65 5z m-157 -43 c20 -12 4 -61 -19 -61 -14 0 -19 7 -19 28 0 40 12 50 38 33z m-475 -71 l-2 -35 11 33 c6 17 15 32 19 32 14 0 78 -68 95 -101 19 -37 9 -49 -41 -49 -81 0 -150 43 -193 119 l-24 42 69 -3 68 -3 -2 -35z m-763 20 c18 -12 2 -12 -25 0 -13 6 -15 9 -5 9 8 0 22 -4 30 -9z m1320 -26 c0 -34 -32 -82 -69 -102 -49 -28 -51 -28 -51 8 0 59 41 108 53 63 3 -12 5 -8 6 9 0 14 7 29 14 31 25 11 47 6 47 -9z m-1360 -2 c0 -5 10 -14 23 -20 20 -11 19 -11 -8 -5 -16 3 -37 12 -45 19 -12 12 -11 14 8 14 12 0 22 -4 22 -8z m1740 -33 c0 -5 -6 -9 -14 -9 -8 0 -23 -3 -33 -6 -14 -4 -15 -4 -4 4 7 5 11 14 8 19 -4 6 4 8 18 5 14 -2 25 -8 25 -13z m-1633 -26 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m1543 -3 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1499 -49 c128 -59 280 -114 305 -109 15 3 5 15 -43 53 -34 27 -61 51 -59 52 2 2 40 -4 85 -12 172 -33 360 -116 543 -240 64 -44 132 -81 172 -95 40 -13 70 -30 77 -41 6 -11 24 -28 40 -38 l30 -19 -26 -21 c-34 -26 -82 -35 -149 -28 -70 7 -136 40 -201 99 -53 48 -170 110 -282 149 -74 25 -113 24 -46 -2 28 -11 116 -62 195 -115 78 -52 167 -106 196 -120 60 -29 157 -46 219 -37 50 7 56 -6 17 -36 -30 -24 -102 -28 -169 -10 -22 6 -141 51 -265 99 -124 49 -256 96 -293 106 -48 12 -65 20 -58 27 18 18 12 27 -11 18 -13 -4 -35 -11 -49 -14 -24 -6 -25 -4 -21 23 4 26 1 30 -19 30 -22 0 -21 2 10 22 l34 22 -41 14 c-46 15 -204 146 -263 217 -37 45 -44 55 -35 55 1 0 50 -22 107 -49z m1239 12 c0 -7 -22 -38 -50 -68 -27 -30 -50 -61 -51 -68 -1 -16 -38 64 -39 83 0 10 16 20 44 28 25 6 53 22 63 36 18 23 32 18 33 -11z m-1360 17 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m1573 -26 c-7 -3 -10 -11 -7 -19 6 -14 -32 -32 -43 -21 -4 3 2 6 11 6 12 0 16 5 13 14 -6 14 7 24 28 24 6 0 5 -2 -2 -4z m-136 -24 c22 0 22 0 -8 -67 -29 -65 -87 -152 -101 -153 -4 0 -20 19 -37 43 -34 50 -32 58 40 137 32 35 50 48 64 45 11 -3 30 -5 42 -5z m-1378 -27 c24 -29 22 -38 -7 -29 -11 4 -22 18 -25 31 -6 32 6 32 32 -2z m1454 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m40 -50 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-1426 -18 c0 -8 -6 -15 -13 -15 -15 0 -26 15 -17 24 12 11 30 6 30 -9z m1408 -14 c6 -12 -44 -61 -62 -61 -19 0 -16 14 7 28 11 7 20 19 20 27 0 16 25 21 35 6z m-1290 -69 c46 -33 51 -40 37 -49 -13 -8 -34 -2 -95 31 -67 35 -75 42 -55 48 44 12 60 8 113 -30z m1152 -58 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-47 -54 c10 -7 -1 -9 -37 -4 -29 4 -65 2 -82 -4 -36 -13 -42 -6 -8 8 30 12 109 12 127 0z m-100 -30 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m90 -89 c0 -13 -50 -51 -66 -51 -17 0 -17 10 -1 31 19 25 67 39 67 20z" />{' '}
                <path d="M1558 1333 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />{' '}
                <path d="M1601 774 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />{' '}
                <path d="M388 1853 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />{' '}
                <path d="M188 1783 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />{' '}
                <path d="M248 1713 c23 -2 59 -2 80 0 20 2 1 4 -43 4 -44 0 -61 -2 -37 -4z" />{' '}
              </g>
            </svg>
          </span>
        </h1>
        <div className="leading-tight mb-3">
          <p className="mb-2">@nickelsh1ts</p>
          <p className="mb-2">
            Jr. Software Enigneer. Creative Developer. Web Enthusiest. Tech
            tinkerer. Pro Open Source.
          </p>
        </div>
        <span className="flex gap-x-4 items-center text-fluid--1 flex-wrap text-neutral-400">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                clipRule="evenodd"
              ></path>
              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
            </svg>
            <span className="whitespace-nowrap">
              <span>Software Engineer at Flight Centre Travel Group</span>
            </span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
            </svg>
            <span className="whitespace-nowrap">
              <a className="font-bold" href="/links">
                /links
              </a>
            </span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z"></path>
            </svg>
            <span className="whitespace-nowrap">September 7th</span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="whitespace-nowrap">Joined April 2024</span>
          </span>
        </span>
        {/* <form className="my-6 grid gap-y-2 justify-center text-center">
          <p>Looking to try out NickflixTV? Request an invite now!</p>
          <div className="flex">
            <input
              className="p-2 px-4 flex-grow rounded-l-full font-semibold"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              type="email"
            />
            <button className="font-bold hover:no-underline border-transparent focus:border-white outline-transparent focus-visible:border-white hover:border-white border-4 rounded-r-full text-fluid--1 flex gap-x-1 items-center text-white bg-brand-fill px-3 py-1">
              Request!
            </button>
          </div>
          <p className="text-neutral-400 text-center">
            No spam. Unsubscribe any time.
          </p>
        </form> */}
      </div>
    </header>
  );
};

export default Header;
