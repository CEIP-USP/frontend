import React, { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

const Switch: FC<Props> = ({ checked, setChecked }) => {
  const inputStyle = checked ? 'right-0 border-green-400' : '';
  const labelStyle = checked ? 'bg-green-400' : '';
  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className={`${inputStyle} absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
        onClick={() => setChecked(!checked)}
      />
      <label
        htmlFor="toggle"
        className={`${labelStyle} block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}
      ></label>
    </div>
  );
};

export default Switch;
