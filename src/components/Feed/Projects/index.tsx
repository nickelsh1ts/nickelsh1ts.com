'use client';

export default function Projects({ activeTab }: { activeTab: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      data-tab-panel="true"
      id="/projects"
      className={`${activeTab === 'tab3' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab3"
    >
      <div className="px-4">
        <div className="flex justify-end mb-4">
          <a href="/projects" className="text-sm font-bold">
            permalink
          </a>
        </div>
        <p className="mb-8">
          Quite often I&apos;m working on a number of things simultaneously.
          Here you will find links and details on all such things.
        </p>
        <section className="mb-8">
          <h2 className="font-bold text-xl">NickflixTV</h2>
          <p className="mb-6">
            I built and administer my own self-hosted and fully autonomous
            streaming platform.
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="https://nickflixtv.com"
                target="blank"
                className="leading-tight"
              >
                NickflixTV Streaming Application
              </a>
              <p className="text-sm text-neutral-400">NICKFLIXTV - Nov 2020</p>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/nickelsh1ts/streamarr"
                target="blank"
                className="leading-tight"
              >
                Streamarr - open-sourced NickflixTV shell
              </a>
              <p className="text-sm text-neutral-400">NICKELSH1TS - TBA 2024</p>
            </li>
            <li className="mb-2">
              <a
                href="https://www.youtube.com/@NicholasWege/videos"
                target="blank"
                className="leading-tight"
              >
                Platform videos and samples
              </a>
              <p className="text-sm text-neutral-400">YOUTUBE - Apr 2021</p>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-bold mb-2 text-xl">HomeLab</h2>
          <p className="mb-6">
            I currently operate a small{' '}
            <a
              href="https://linuxhandbook.com/homelab/"
              style={{ cursor: 'help' }}
              title="What is a Homelab and Why Should You Have One?"
              className="italic"
              target="blank"
            >
              homelab
            </a>{' '}
            with various miscellaneous hardware I&apos;ve gathered over the
            years. Here&apos;s some of the open source projects I currently run.
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="https://i.dell.com/sites/csdocuments/Shared-Content_data-Sheets_Documents/en/T110-SpecSheet.pdf"
                className="leading-tight"
                target="blank"
              >
                Dell PowerEdge T110
              </a>
              <p className="text-sm text-neutral-400">3x Server Towers</p>
            </li>
            <li className="mb-2">
              <a
                href="https://www.lenovo.com/ch/en/c/desktops/thinkcentre/m-series-tiny/"
                className="leading-tight"
                target="blank"
              >
                Lenovo ThinkCentre MSeries
              </a>
              <p className="text-sm text-neutral-400">9x MiniPCs</p>
            </li>
            <li className="mb-2">
              <p className="leading-tight">Home Gaming PC</p>
              <p className="text-sm text-neutral-400">
                ABS Gladiator Gaming PC - 16GB DDR4 3000MHz - 1TB Intel M.2 NVMe
                SSD
              </p>
              <p className="text-sm text-neutral-400">
                Operating System: Windows 11 64-bit
              </p>
              <p className="text-sm text-neutral-400">
                CPU Type: Ryzen 7 3rd Gen
              </p>
              <p className="text-sm text-neutral-400">
                CPU Name: AMD Ryzen 7 3700X
              </p>
              <p className="text-sm text-neutral-400">
                GPU/VGA Type: NVIDIA GeForce RTX 3070
              </p>
            </li>
            <li className="mb-2">
              <p className="leading-tight">Current Tech Stack</p>
              <ul className="text-sm text-neutral-400 grid grid-cols-3 sm:grid-cols-5 gap-5 my-3">
                <li className="mb-2">
                  <a
                    href="https://console.cloud.google.com"
                    className="leading-tight"
                    target="blank"
                  >
                    Google Cloud
                  </a>
                  <p className="text-sm text-neutral-400">
                    OAuth and API access
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://dash.cloudflare.com"
                    className="leading-tight"
                    target="blank"
                  >
                    Cloudflare
                  </a>
                  <p className="text-sm text-neutral-400">
                    DNS and domain services
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://console.aws.amazon.com/"
                    className="leading-tight"
                    target="blank"
                  >
                    AWS
                  </a>
                  <p className="text-sm text-neutral-400">
                    Hosting and storage
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://cloud.cypress.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    Cypress Cloud
                  </a>
                  <p className="text-sm text-neutral-400">
                    Test. Automate. Accelerate.
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/nickelsh1ts"
                    className="leading-tight"
                    target="blank"
                  >
                    GitHub
                  </a>
                  <p className="text-sm text-neutral-400">
                    Test. Automate. Accelerate.
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://app.brevo.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Brevo
                  </a>
                  <p className="text-sm text-neutral-400">SMTP server</p>
                </li>
                <p>app.plex</p>
                <p>Overseerr</p>
                <p>Sonarr.tv</p>
                <p>Radarr.video</p>
                <p>Bazarr</p>
                <p>prowlarr</p>
                <p>Tdarr.io</p>
                <p>Tautulli</p>
                <p>Lidarr</p>
                <p>Readarr</p>
                <p>Authentik</p>
                <p>netdata</p>
                <p>dozzle</p>
                <p>Traefik</p>
                <p>pi-hole</p>
                <p>portainer</p>
                <p>calibre</p>
                <p>theme-park.dev</p>
                <p>HomeAssistant</p>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-bold mb-2 text-xl">More coming soon...</h2>
          <p className="mb-6">
            I&apos;m still working on this page. Come check back later.
          </p>
          <ul>
            <li className="mb-2">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="leading-tight"
              >
                Go back to the top
              </a>
              <p className="text-sm text-neutral-400">See you soon!</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
