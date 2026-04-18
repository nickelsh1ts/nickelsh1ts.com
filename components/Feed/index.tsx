import Posts from '@components/Feed/Posts';
import Tabs from '@components/common/Tabs';
import Header from '@components/common/Header';

type PageTabProps = {
  pageTab: string;
};

export default function Feed({ pageTab }: PageTabProps) {
  return (
    <>
      <Header />
      <main className="w-content max-w-full mv-0 mx-auto flex flex-col justify-center pt-4 gap-8">
        <Tabs pageTab={pageTab}>
          <Posts />
        </Tabs>
      </main>
    </>
  );
}
