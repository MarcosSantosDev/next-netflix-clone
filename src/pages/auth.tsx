import * as React from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Input from '@/components/Input';

const Auth: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [variant, setVariant] = React.useState<'login' | 'register'>('login');

  const toggleVariant = React.useCallback(() => {
    setVariant(state => {
      return state === 'login' ? 'register' : 'login';
    });
  }, [setVariant]);

  const login = React.useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (error) {
      console.error(error);
    }
  }, [name, email, password]);

  const register = React.useCallback(async () => {
    try {
      await axios.post('api/register', {
        name,
        email,
        password,
      });

      login();
    } catch (error) {
      console.error(error);
    }
  }, [name, email, password, login]);

  return (
    <div className="bg-not-repeat relative h-full w-full bg-[url(/images/hero.jpg)] bg-cover bg-fixed bg-center">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === 'login' ? 'Sign in' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  label="Username"
                  value={name}
                  onChange={event => {
                    setName(event.target.value);
                  }}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
              onClick={variant === 'login' ? login : register}
            >
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition
                  hover:opacity-80
                "
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              >
                <FcGoogle size={30} />
              </div>
              <div
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition
                  hover:opacity-80
                "
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="mt-12 text-neutral-500">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                className="ml-1 cursor-pointer text-white hover:underline"
                onClick={toggleVariant}
              >
                {variant === 'login' ? 'Create and account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
