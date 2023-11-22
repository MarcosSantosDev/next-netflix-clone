import Head from 'next/head';
import { getSession, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <div>
      <Head>
        <title>Netflix clone</title>
      </Head>
      <h1 className="text-2xl text-white">Home - Nextflix</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button
        className="rounded border-2 border-red-800 p-3 text-white"
        type="button"
        onClick={() => signOut()}
      >
        SIGN OUT
      </button>
    </div>
  );
}
