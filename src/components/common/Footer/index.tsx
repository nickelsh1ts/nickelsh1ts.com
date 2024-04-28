'use client';

export default function Footer() {
  return (
    <footer className="w-content max-w-full mx-auto py-8 text-zinc-300 mt-auto">
      <div className="grid place-items-center gap-y-2 w-full">
        <div className="flex flex-wrap justify-center">
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://github.com/nickelsh1ts"
            rel="noopener noreferrer"
            target="_blank"
            title="See what I'm making on Github"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>Github icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://www.linkedin.com/in/nicholaswege/"
            rel="noopener noreferrer"
            target="_blank"
            title="Come follow me on Mastodon!"
          >
            <svg
              fill="currentColor"
              role="img"
              className="w-5 h-5"
              viewBox="-143 145 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Linkedin icon</title>
              <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://discord.gg/Zmp4nNzYQH"
            rel="noopener noreferrer"
            target="_blank"
            title="Come follow me on Twitter!"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>Discord icon</title>
              <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://instagram.com/nickelsh1ts"
            rel="noopener noreferrer"
            target="_blank"
            title="Come follow me on Instagram!"
          >
            <svg
              fill="currentColor"
              role="img"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram icon</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://www.youtube.com/@nickelsh1ts"
            rel="noopener noreferrer"
            target="_blank"
            title="Check out my CodePen"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>Youtube icon</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z"
              ></path>{' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z"
              ></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://steamcommunity.com/id/nickelsh1ts/"
            rel="noopener noreferrer"
            target="_blank"
            title="Check out my latest live stream"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 32 32"
              role="img"
            >
              <title>Steam icon</title>
              <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://account.xbox.com/en-ca/profile?gamertag=dontjdgmemnky"
            rel="noopener noreferrer"
            target="_blank"
            title="Check out my latest live stream"
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 48 48"
              role="img"
            >
              <title>Xbox icon</title>
              <path d="M21.8572,45.4116a21.4447,21.4447,0,0,1-9.5412-3.3844c-2.4127-1.5741-2.9575-2.2212-2.9575-3.5126,0-2.5939,2.8521-7.1372,7.7318-12.3164,2.7714-2.9415,6.6317-6.3894,7.0492-6.296.8115.1815,7.3,6.5106,9.729,9.49,3.8411,4.7114,5.6069,8.569,4.71,10.2888-.6819,1.3073-4.9134,3.8625-8.0221,4.8442a23.58,23.58,0,0,1-8.699.8865ZM6.1,35.8177A22.2968,22.2968,0,0,1,2.5931,25.3344,16.7961,16.7961,0,0,1,2.96,20.0929,21.4647,21.4647,0,0,1,8.1843,9.48c1.0781-1.1218,1.1744-1.1491,2.4887-.7064,1.5959.5377,3.3,1.7148,5.9436,4.1049l1.5422,1.3945-.8422,1.0346C13.4073,20.11,9.28,26.9176,7.7251,31.1293c-.8455,2.29-1.1865,4.588-.8227,5.5449C7.148,37.32,6.9224,37.0794,6.1,35.8177Zm35.1915.5231a10.4377,10.4377,0,0,0-.64-4.5335c-1.2715-3.8786-5.5213-11.094-9.4238-16L30,14.2631l1.329-1.22a28.0616,28.0616,0,0,1,4.24-3.3579,8.1642,8.1642,0,0,1,3.122-1.2054c.3886,0,1.7563,1.4194,2.8605,2.9685A22.5059,22.5059,0,0,1,45.157,19.783a27.7467,27.7467,0,0,1,.0663,8.0951,25.51,25.51,0,0,1-1.6119,5.0876,27.2253,27.2253,0,0,1-2.2019,3.773c-.27.343-.27.3422-.1181-.3979ZM22.2116,7.747a26.73,26.73,0,0,0-6.1129-2.16A11.2009,11.2009,0,0,0,14.06,5.4722c-1.266.064-1.21-.0022.8215-.9618A20.8882,20.8882,0,0,1,19.89,2.8421a25.8166,25.8166,0,0,1,8.31-.0109,23.1889,23.1889,0,0,1,6.495,2.417l.4509.2775-1.0344-.0523C32.0563,5.37,29.0607,6.2,25.8445,7.7653a17.1393,17.1393,0,0,1-1.8755.8379C23.9076,8.5919,23.1168,8.2066,22.2116,7.747Z"></path>
            </svg>
          </a>
          <a
            className="text-fox w-10 h-10 grid place-items-center rounded-md hover:bg-zinc-700"
            href="https://psnprofiles.com/DntJdgMeMnky"
            rel="noopener noreferrer"
            target="_blank"
            title="Grab my RSS Feed!"
          >
            <svg
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 32 32"
              role="img"
            >
              <title>PlayStation icon</title>
              <path d="M3.262 24.248c-2.374-0.681-2.767-2.084-1.69-2.899 0.776-0.51 1.668-0.954 2.612-1.288l0.087-0.027 7.017-2.516v2.89l-5.030 1.839c-0.881 0.339-1.031 0.79-0.299 1.032 0.365 0.093 0.783 0.147 1.214 0.147 0.615 0 1.204-0.109 1.749-0.308l-0.035 0.011 2.422-0.882v2.592c-0.15 0.037-0.32 0.055-0.487 0.091-0.775 0.136-1.667 0.214-2.577 0.214-1.778 0-3.486-0.298-5.078-0.846l0.11 0.033zM18.049 24.544l7.868-2.843c0.893-0.322 1.032-0.781 0.307-1.022-0.363-0.089-0.779-0.14-1.208-0.14-0.622 0-1.22 0.108-1.774 0.305l0.037-0.011-5.255 1.874v-2.983l0.3-0.106c1.050-0.349 2.284-0.62 3.557-0.761l0.083-0.008c0.468-0.050 1.010-0.078 1.559-0.078 1.877 0 3.677 0.331 5.343 0.939l-0.108-0.035c2.309 0.751 2.549 1.839 1.969 2.589-0.559 0.557-1.235 0.998-1.988 1.282l-0.039 0.013-10.677 3.883v-2.869zM12.231 4.248v21.927l4.892 1.576v-18.39c0-0.862 0.38-1.438 0.992-1.238 0.795 0.225 0.95 1.017 0.95 1.881v7.342c3.050 1.491 5.451-0.003 5.451-3.939 0-4.045-1.407-5.842-5.546-7.282-1.785-0.648-4.040-1.294-6.347-1.805l-0.389-0.072z"></path>
            </svg>
          </a>
        </div>
        <div className="text-zinc-500">
          nickelsh1ts © <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
