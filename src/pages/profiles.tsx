import useCurrentUser from '@/hooks/useCurrentUser';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import * as React from 'react';

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

const Profiles: React.FC = () => {
  const router = useRouter();

  const { data: user } = useCurrentUser();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <h1 className="md-text-6xl text-center text-3xl text-white">
          Who is watching?
        </h1>

        <div className="mt-10 flex items-center justify-center gap-8">
          <div onClick={() => goToHome()}>
            <div className="group mx-auto w-44 flex-row">
              <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
                <img src="/images/default-blue.png" alt="Profile" />
              </div>
              <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
