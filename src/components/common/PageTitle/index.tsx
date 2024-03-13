import Head from 'next/head';

interface PageTitleProps {
  title: string | (string | undefined)[];
}

const applicationTitle = 'nickelsh1ts';

const PageTitle = ({ title }: PageTitleProps) => {

  const titleText = `${
    Array.isArray(title) ? title.filter(Boolean).join(' - ') : title
  } | ${applicationTitle}`;

  return (
    <Head>
      <title>{titleText}</title>
    </Head>
  );
};

export default PageTitle;
