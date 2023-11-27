import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

import { Navbar, Billboard, MovieList } from '@/components/context';
import useMovieList from '@/hooks/useMovieList';

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
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Head>
        <title>Netflix clone</title>
      </Head>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trendig Now" movies={movies} />
      </div>
    </>
  );
}
