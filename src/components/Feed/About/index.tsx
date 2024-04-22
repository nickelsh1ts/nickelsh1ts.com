'use client';

export default function About({ activeTab }: { activeTab: string }) {
  return (
    <section
      data-tab-panel="true"
      id="/about"
      className={`${activeTab === 'tab2' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab2"
    >
      <div className="px-4">
        <div className="flex justify-end mb-4">
          <a href="/about" className="text-sm font-bold">
            permalink
          </a>
        </div>
        <h2 className="mb-2 font-bold text-3xl">Hey there! 🤝</h2>
        <p className="mb-6">
          The name&apos;s Nicholas aka Nickelshits. I&apos;m a web enthusiest
          and developer who loves to automate life one line of code at a time.
        </p>
        <p className="mb-6">
          I am an adovate of Open Source and its methodology. I enjoy playing
          around and building in this space.
        </p>
        <p className="mb-6">
          I&apos;m known for my creative applications and determination to make
          everything easier and faster with automations and codes. It&apos;s
          astonshing how much information can be found when you open a computer.
          It&apos;s even more amazing how all this knowledge can help you do
          anything you put your mind to.
        </p>
        <figure className="grid place-items-center my-6">
          <picture>
            <img
              className="rounded-lg mb-2"
              src="/nick-at-toughmudder.jpg"
              alt=""
              width="600"
              height="300"
              decoding="async"
              loading="lazy"
            />
          </picture>
          <figcaption className="text-zinc-400 text-sm font-thin">
            Nick at the finish line of a 16km obstacle course - 2019
          </figcaption>
        </figure>
        <p className="mb-6">
          I&apos;ve been fortunate enough to develop and learn the skills I have
          from some great mentors over the course of my adult career. I&apos;m
          currently a Jr. Software Engineer at Flight Centre Travel Group where
          I work on our ServiceNow platform.
        </p>
        <p className="mb-6">
          It may be surprising to learn but I have never had any formal
          education in computer sciences or development. That&apos;s not to say
          I&apos;m not always learning or messing around in something new. I
          thrive on the determination to make new things work. Constantly
          researching and participating in trainings to understand and build
          something creative and effective.
        </p>
        <p className="mb-6">
          Besides ServiceNow, I dabble in Node and React applications (such as
          this site). I can work with CSS, Javascript and typescript. I pride
          myself on being a quick learner able to jump in and work under
          pressure.
        </p>
        <p className="mb-6">
          I&apos;m an open book. Feel free to reach out anytime!
        </p>
        <p className="">
          <strong className="bold">Cheers,</strong>
        </p>
        <p className="mb-6 fill-white">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            className="w-56"
            viewBox="0 0 204.000000 120.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M1271 1136 c-8 -36 -12 -97 -9 -150 3 -77 9 -102 36 -160 43 -91 89
                  -146 176 -211 109 -80 107 -74 42 -150 -30 -36 -59 -71 -63 -78 -9 -14 -139
                  -117 -149 -117 -3 0 10 18 30 40 36 40 53 80 41 99 -3 6 -23 10 -43 9 -29 -2
                  -57 -19 -136 -81 -90 -71 -131 -97 -157 -97 -16 0 -9 26 12 46 12 10 39 41 61
                  68 64 81 14 91 -81 16 -28 -22 -53 -40 -57 -40 -4 0 18 28 48 63 191 219 233
                  277 199 277 -4 0 -52 -53 -107 -117 -132 -156 -322 -313 -377 -313 -8 0 -20 7
                  -27 15 -16 19 13 67 75 124 42 39 82 58 56 28 -6 -8 -9 -16 -6 -19 3 -3 -5
                  -13 -17 -24 l-23 -19 19 23 c11 12 14 22 8 22 -14 0 -47 -48 -39 -56 21 -21
                  98 70 82 96 -19 31 -68 5 -204 -104 -74 -60 -136 -95 -148 -83 -6 6 3 18 75
                  106 23 29 42 57 42 62 0 21 -36 6 -84 -34 -129 -109 -216 -160 -216 -126 0 7
                  79 92 174 189 107 108 178 188 182 204 10 40 -14 60 -59 52 -37 -7 -159 -82
                  -237 -145 -81 -65 -85 -67 -37 -11 52 60 80 112 75 138 -5 28 -54 26 -106 -4
                  -119 -69 -281 -224 -234 -224 4 0 32 23 62 52 66 62 202 164 231 173 63 20 22
                  -38 -166 -238 -146 -156 -185 -207 -157 -207 4 0 58 49 119 109 129 125 289
                  250 397 306 140 74 111 23 -113 -200 -122 -121 -171 -176 -171 -193 0 -57 82
                  -34 191 54 l80 66 -35 -50 c-46 -63 -48 -92 -5 -92 38 0 61 12 122 63 45 37
                  47 38 37 12 -13 -35 -13 -41 6 -59 18 -19 76 -21 107 -5 12 7 58 41 102 77 81
                  67 82 65 11 -21 -29 -36 -36 -51 -27 -60 8 -8 23 0 59 35 58 56 150 128 164
                  128 6 0 -15 -28 -46 -61 -62 -67 -71 -101 -27 -107 38 -6 66 6 122 49 34 28
                  49 36 44 23 -5 -10 -9 -32 -9 -49 -1 -24 4 -31 22 -33 30 -5 116 38 169 83 51
                  43 58 44 38 4 -41 -78 18 -106 98 -45 l46 35 3 -27 c4 -37 31 -39 79 -7 37 24
                  39 24 29 5 -30 -56 63 -55 126 2 21 19 21 19 27 -10 3 -16 13 -32 22 -35 17
                  -7 79 3 71 11 -3 3 8 21 26 40 48 55 80 137 86 219 7 107 -2 138 -56 192 -56
                  55 -103 73 -271 106 -178 36 -283 88 -312 157 -13 31 -13 32 -19 9 -5 -21 -10
                  -16 -40 40 -24 46 -36 82 -40 129 l-6 65 -13 -59z m93 -225 c14 -13 56 -40 94
                  -60 38 -20 84 -48 103 -63 l34 -28 -41 0 c-25 0 -47 6 -54 15 -39 47 -21 -38
                  20 -96 l21 -29 -25 10 c-15 5 -40 17 -57 26 -17 8 -33 13 -35 11 -8 -8 88 -74
                  146 -101 37 -18 45 -24 25 -20 -42 8 -133 65 -177 111 -48 50 -110 153 -104
                  175 2 10 -5 34 -15 55 -11 22 -19 58 -19 87 l0 49 30 -59 c16 -33 41 -71 54
                  -83z m301 -132 c73 -17 96 -32 152 -93 58 -63 89 -121 102 -189 10 -54 2 -66
                  -24 -37 -19 21 -101 50 -140 50 -12 0 -30 9 -39 19 -17 19 -17 21 3 48 48 67
                  16 96 -50 44 -37 -31 -40 -31 -68 -16 -17 8 -37 15 -45 15 -8 0 -18 4 -21 10
                  -4 6 6 7 27 3 l33 -6 -26 29 c-15 16 -34 41 -44 57 l-17 27 48 1 c27 0 67 6
                  89 13 l40 12 -44 6 c-24 4 -49 12 -55 18 -8 9 -6 11 9 7 11 -4 43 -11 70 -18z
                  m225 -59 c79 -39 113 -85 118 -161 3 -34 -1 -86 -8 -116 -11 -53 -12 -54 -31
                  -37 -11 10 -19 12 -19 6 0 -7 -4 -12 -9 -12 -6 0 -6 12 0 30 24 67 -29 194
                  -117 283 -45 47 -46 48 -18 41 16 -3 54 -19 84 -34z m-174 -118 c-19 -38 -28
                  -43 -46 -31 -12 8 -9 15 18 40 40 36 50 33 28 -9z m-38 -68 c25 -7 30 -24 7
                  -24 -8 0 -15 4 -15 9 0 5 -8 7 -19 4 -10 -3 -22 0 -25 6 -8 12 16 14 52 5z
                  m-75 -56 c-15 -17 -46 -44 -68 -61 -35 -28 -37 -29 -20 -7 73 92 88 108 102
                  103 11 -4 8 -12 -14 -35z m152 1 c136 -22 179 -68 118 -126 -81 -75 -183 -134
                  -183 -105 0 6 25 41 55 77 59 72 67 90 35 80 -11 -4 -20 -2 -20 4 0 6 -13 11
                  -29 11 -21 0 -60 -23 -137 -81 -156 -117 -196 -127 -147 -38 16 30 52 70 92
                  103 36 30 75 63 86 75 12 12 28 19 40 16 11 -3 52 -10 90 -16z m-395 -85 c0
                  -23 -33 -75 -45 -71 -19 6 -16 42 5 65 24 26 40 28 40 6z m390 2 c0 -15 -94
                  -107 -129 -125 -61 -33 -24 30 58 97 54 44 71 51 71 28z m180 -86 c-18 -28
                  -35 -50 -40 -50 -4 0 -12 10 -18 23 -9 19 -5 27 36 64 58 51 68 34 22 -37z
                  m-629 4 c5 -7 -4 -23 -26 -44 -66 -64 -82 -5 -17 63 24 25 27 26 31 10 2 -10
                  7 -23 12 -29z m562 -54 c3 -11 2 -20 -3 -20 -8 0 -20 24 -20 41 0 17 17 1 23
                  -21z"
              />
              <path d="M668 529 c-26 -15 -22 -39 5 -39 25 0 47 17 47 37 0 15 -28 17 -52 2z" />
            </g>
          </svg>
        </p>
      </div>
    </section>
  );
}
