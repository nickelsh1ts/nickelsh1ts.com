'use client';
export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <div className="px-4">
        <p className="mb-8">
          Quite often I&apos;m working on a number of things simultaneously.
          Here you will find links and details on all such things.
        </p>
        <section className="mb-8">
          <h2 className="font-bold text-xl">NickflixTV</h2>
          <p className="mb-6">
            I built and administer my own self-hosted and fully autonomous
            streaming platform. Backed by my own open-source application
            Streamarr.
          </p>
          <ul>
            <li className="mb-2">
              <a
                href="https://www.nickflixtv.com"
                target="blank"
                className="leading-tight"
              >
                NickflixTV Streaming Platform
              </a>
              <p className="text-sm text-neutral-400">NICKFLIXTV - Nov 2020</p>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/nickelsh1ts/streamarr"
                target="blank"
                className="leading-tight"
              >
                Streamarr - open-sourced project
              </a>
              <p className="text-sm text-neutral-400">NICKELSH1TS - Apr 2026</p>
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
                ABS Gladiator Gaming PC - 64GB DDR4 3000MHz - 1TB Intel M.2 NVMe
                SSD, 2TB Crucial P3 NVMe SSD
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
                    Seerr
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
                    href="https://www.qbittorrent.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    Qbittorrent
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
                    href="https://traefik.io/traefik/"
                    target="blank"
                    className="leading-tight"
                  >
                    Traefik
                  </a>
                  <p className="text-sm text-neutral-400">Reverse Proxy</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://netbird.io/"
                    target="_blank"
                    className="leading-tight"
                  >
                    Netbird
                  </a>
                  <p className="text-sm text-neutral-400">VPN</p>
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
                <li className="mb-2">
                  <a
                    href="https://it-tools.tech/"
                    target="blank"
                    className="leading-tight"
                  >
                    IT Tools
                  </a>
                  <p className="text-sm text-neutral-400">
                    software and hardware utilities
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://kometa.wiki/en/latest/"
                    target="blank"
                    className="leading-tight"
                  >
                    Kometa
                  </a>
                  <p className="text-sm text-neutral-400">Custom Metadata</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://mastodon.social/"
                    target="blank"
                    className="leading-tight"
                  >
                    Mastadon
                  </a>
                  <p className="text-sm text-neutral-400">Social Media</p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://nodejs.org/"
                    target="blank"
                    className="leading-tight"
                  >
                    NodeJS
                  </a>
                  <p className="text-sm text-neutral-400">
                    Runtime Environment
                  </p>
                </li>
                <li className="mb-2">
                  <a
                    href="https://n8n.io/"
                    target="blank"
                    className="leading-tight"
                  >
                    n8n
                  </a>
                  <p className="text-sm text-neutral-400">
                    Workflow Automation
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="font-bold mb-2 text-xl">+ many more</h2>
          <p className="mb-6">
            I&apos;m always spinning up new services and testing them out.
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
