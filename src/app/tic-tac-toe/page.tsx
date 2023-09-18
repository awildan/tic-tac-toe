import RootLayout from '@/app/layout';
import Board from '@/container/Board';
// `app/dashboard/page.tsx` is the UI for the `/dashboard`

const Page = () => {
  return (
    <RootLayout>
      <Board />
    </RootLayout>
  );
};

export default Page;
