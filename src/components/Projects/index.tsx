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
          <h2 className="font-bold text-xl">nickelsh1ts</h2>
          <p className="mb-6">
            I gave my &quot;brand&quot; and homelab a name. I work on, build and
            run a whole lot of things.
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="https://cloud.nickelsh1ts.com"
                target="blank"
                className="leading-tight"
              >
                Self-hosted personal cloud
              </a>
              <p className="text-sm text-neutral-400">NEXTCLOUD</p>
            </li>
            <li className="mb-2">
              <a
                href="https://office.nickelsh1ts.com"
                target="blank"
                className="leading-tight"
              >
                Fully online office suit
              </a>
              <p className="text-sm text-neutral-400">ONLYOFFICE</p>
            </li>
            <li className="mb-2">
              <a
                href="https://plane.nickelsh1ts.com/"
                target="blank"
                className="leading-tight"
              >
                Project Management Suite
              </a>
              <p className="text-sm text-neutral-400">PLANE</p>
            </li>
            <li className="mb-2">
              <a
                href="https://uptime.nickelsh1ts.com/status/systems"
                target="blank"
                className="leading-tight"
              >
                Service Uptime Status
              </a>
              <p className="text-sm text-neutral-400">UPTIME KUMA</p>
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
              <ul className="text-sm text-neutral-400 grid grid-cols-3 sm:grid-cols-5 gap-2 my-3">
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
                <li className="mb-2">
                  <a
                    href="https://app.plex.tv"
                    target="blank"
                    className="leading-tight"
                  >
                    app.plex
                  </a>
                  <p className="text-sm text-neutral-400">Streaming</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://overseerr.dev/"
                    target="blank"
                    className="leading-tight"
                  >
                    Overseerr
                  </a>
                  <p className="text-sm text-neutral-400">Request Management</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://sonarr.tv/"
                    target="blank"
                    className="leading-tight"
                  >
                    Sonarr.tv
                  </a>
                  <p className="text-sm text-neutral-400">TV PVR</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://radarr.video/"
                    target="blank"
                    className="leading-tight"
                  >
                    Radarr.video
                  </a>
                  <p className="text-sm text-neutral-400">Movie PVR</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.bazarr.media/"
                    target="blank"
                    className="leading-tight"
                  >
                    Bazarr.media
                  </a>
                  <p className="text-sm text-neutral-400">SRT Indexer</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://prowlarr.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Prowlarr
                  </a>
                  <p className="text-sm text-neutral-400">Indexer Manager</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://home.tdarr.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    Tdarr.io
                  </a>
                  <p className="text-sm text-neutral-400">Transcoding</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tautulli.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Tautulli
                  </a>
                  <p className="text-sm text-neutral-400">Statistics</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://lidarr.audio/"
                    target="blank"
                    className="leading-tight"
                  >
                    Lidarr.audio
                  </a>
                  <p className="text-sm text-neutral-400">Music Manager</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://readarr.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Readarr
                  </a>
                  <p className="text-sm text-neutral-400">eBook Manager</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://goauthentik.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    authentik.io
                  </a>
                  <p className="text-sm text-neutral-400">
                    Authentication & SSO
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.netdata.cloud/"
                    target="blank"
                    className="leading-tight"
                  >
                    NETDATA
                  </a>
                  <p className="text-sm text-neutral-400">Monitoring</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://dozzle.dev/"
                    target="blank"
                    className="leading-tight"
                  >
                    Dozzle
                  </a>
                  <p className="text-sm text-neutral-400">Logging</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://traefik.io/traefik/"
                    target="blank"
                    className="leading-tight"
                  >
                    Traefik.io
                  </a>
                  <p className="text-sm text-neutral-400">App Proxy</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://pi-hole.net/"
                    target="blank"
                    className="leading-tight"
                  >
                    Pi-hole
                  </a>
                  <p className="text-sm text-neutral-400">
                    Network-wide Ad Blocking
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.portainer.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    portainer.io
                  </a>
                  <p className="text-sm text-neutral-400">
                    Container Management
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://calibre-ebook.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Calibre{' '}
                  </a>
                  <p className="text-sm text-neutral-400">eBook Server</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://theme-park.dev/"
                    target="blank"
                    className="leading-tight"
                  >
                    theme.park
                  </a>
                  <p className="text-sm text-neutral-400">App Themes</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.home-assistant.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    Home Assistant
                  </a>
                  <p className="text-sm text-neutral-400">Home Automation</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://nextcloud.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    NextCloud
                  </a>
                  <p className="text-sm text-neutral-400">Home Cloud</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.deluge-torrent.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    Deluge
                  </a>
                  <p className="text-sm text-neutral-400">BitTorrent Client</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.firefly-iii.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    FireFlyiii
                  </a>
                  <p className="text-sm text-neutral-400">Finance Manager</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://flood.js.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    Flood
                  </a>
                  <p className="text-sm text-neutral-400">BitTorrent UI</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.onlyoffice.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    OnlyOffice
                  </a>
                  <p className="text-sm text-neutral-400">Office Suite</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://plane.so/"
                    target="blank"
                    className="leading-tight"
                  >
                    Plane
                  </a>
                  <p className="text-sm text-neutral-400">Project Management</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://gotify.net/"
                    target="blank"
                    className="leading-tight"
                  >
                    Gotify
                  </a>
                  <p className="text-sm text-neutral-400">Notifications</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://uptime.kuma.pet/"
                    target="blank"
                    className="leading-tight"
                  >
                    Uptime Kuma
                  </a>
                  <p className="text-sm text-neutral-400">Service Status</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/dani-garcia/vaultwarden"
                    target="blank"
                    className="leading-tight"
                  >
                    VaultWarden
                  </a>
                  <p className="text-sm text-neutral-400">Vault Service</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://js.wiki/"
                    target="blank"
                    className="leading-tight"
                  >
                    WikiJS
                  </a>
                  <p className="text-sm text-neutral-400">Wiki Server</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.activepieces.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    ActivePieces
                  </a>
                  <p className="text-sm text-neutral-400">
                    Automation Platform
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/dbeaver/cloudbeaver"
                    target="blank"
                    className="leading-tight"
                  >
                    CloudBeaver
                  </a>
                  <p className="text-sm text-neutral-400">Database Manager</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://duplicacy.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Duplicacy
                  </a>
                  <p className="text-sm text-neutral-400">Backups</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://jellyfin.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    Jellyfin
                  </a>
                  <p className="text-sm text-neutral-400">Media System</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.proxmox.com/en/"
                    target="blank"
                    className="leading-tight"
                  >
                    Proxmox
                  </a>
                  <p className="text-sm text-neutral-400">Virtualization</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/meeb/tubesync"
                    target="blank"
                    className="leading-tight"
                  >
                    TubeSync
                  </a>
                  <p className="text-sm text-neutral-400">Youtube PVR</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.truenas.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    TrueNAS
                  </a>
                  <p className="text-sm text-neutral-400">Network Storage</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.nginx.com/"
                    target="blank"
                    className="leading-tight"
                  >
                    Nginx
                  </a>
                  <p className="text-sm text-neutral-400">Web Server</p>
                </li>
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
