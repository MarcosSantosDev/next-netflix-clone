import * as React from 'react';

type InputProps = {
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
};

const Input = ({ id, onChange, value, label, type }: InputProps) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="
        text-md
        peer
        block
        w-full
        appearance-none
        rounded-md
        bg-neutral-700
        px-6
        pb-1
        pt-6
        text-white
        focus:outline-none
        focus:ring-0
        "
        placeholder=" "
        type={type}
        onChange={onChange}
        value={value}
      />
      <label
        className="
        text-md
        absolute
        left-6
        top-4
        z-10
        origin-[0]
        -translate-y-3
        scale-75
        transform
        text-zinc-400
        duration-150
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        peer-focus:-translate-y-3
        peer-focus:scale-75
      "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
