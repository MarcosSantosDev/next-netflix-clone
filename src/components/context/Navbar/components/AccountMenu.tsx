import * as React from 'react';
import { signOut } from 'next-auth/react';

type AccountMenuProps = {
  visible: boolean;
};

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (visible) {
    return (
      <div className="absolute right-0 top-14 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
        <div className="flex flex-col gap-3">
          <div className="group/item flex w-full flex-row items-center gap-3 px-3">
            <img
              className="w-8 rounded-md"
              src="/images/default-blue.png"
              alt="logo"
            />
            <p className="text-sm text-white group-hover/item:underline">
              Username
            </p>
          </div>
          <hr className="my-4 h-px border-0 bg-gray-600" />
          <div
            className="px-3 text-center text-sm text-white hover:underline"
            onClick={() => signOut()}
          >
            Sing out of Netflix
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AccountMenu;
