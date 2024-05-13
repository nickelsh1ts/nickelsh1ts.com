interface LinkProps {
  text: string;
  img?: React.ReactNode;
  link: string;
  target?: string;
}

const LinkItems: LinkProps[] = [
  {
    text: 'NickflixTV - self-hosted private streaming service',
    link: 'https://nickflixtv.com',
    target: '_self',
    img: (
      <img
        src="/nickflixtv-logo_maskable-512x512.png"
        alt="metamask"
        className="rounded"
      />
    ),
  },
  {
    text: 'CloudSh1ts - self-hosted cloud infrastructure',
    link: 'https://cloud.nickelsh1ts.com',
    img: <img src="/next-cloud.svg" alt="nextcloud" className="rounded" />,
  },
  {
    text: 'OnlyOffice - self-hosted office suite',
    link: 'https://office.nickelsh1ts.com',
    img: <img src="/onlyoffice.png" alt="nextcloud" className="rounded" />,
  },
];

const LinksList = () => {
  return (
    <div className="w-content max-w-full mx-auto grid gap-3 px-4 md:px-0 mt-2">
      {LinkItems.map((LinkItem) => (
        <a
          href={LinkItem.link}
          target={LinkItem.target || '_blank'}
          key={LinkItem.text}
          className="flex min-h-12 items-center transition-colors duration-300 hover:no-underline border-transparent focus:border-white outline-transparent focus-visible:border-white hover:border-white border-4 rounded text-white bg-brand-fill"
        >
          {LinkItem.img && (
            <div className="flex items-center justify-center w-14 h-full me-1">
              {LinkItem.img}
            </div>
          )}
          <p className="font-bold text-center items-center tracking-wider w-full">
            {LinkItem.text}
          </p>
        </a>
      ))}
    </div>
  );
};

export default LinksList;
