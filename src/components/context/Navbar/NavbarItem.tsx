import * as React from 'react';

type NavbarProps = {
  label: string;
};

const Navbar: React.FC<NavbarProps> = ({ label }) => {
  return (
    <div className="cursor-pointer text-white transition hover:text-gray-300">
      {label}
    </div>
  );
};

export default Navbar;
