import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  label: string;
  options: string[];
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  disabled?: boolean;
};

const ChipsDropdown: FC<Props> = ({
  label,
  options,
  selected,
  setSelected,
  disabled,
}) => {
  const [open, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (
        open &&
        event.target &&
        !selectRef?.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    });
  }, [open]);

  function removeSelectedOption(option: string) {
    setSelected(selected.filter((item) => item !== option));
  }

  const disabledStyle = disabled ? 'bg-gray-50' : 'bg-white';

  return (
    <div ref={selectRef} className="relative py-4">
      <div className="-mt-2 absolute tracking-wider px-1 text-xs z-10">
        <label htmlFor="password" className="bg-white text-gray-600 px-1">
          {label}
        </label>
      </div>
      <div
        className={`${disabledStyle} p-2 min-h-12 relative border border-gray-300 dark:border-gray-600 rounded`}
      >
        <div className="flex flex-wrap items-center">
          {selected.map((item) => (
            <div
              key={item}
              className="mt-1 ml-1 p-1 max-w-min flex items-center bg-blue-500 text-white rounded select-none cursor-text"
            >
              <span className="text-sm overflow-clip">{item}</span>
              <button
                onClick={() => {
                  !disabled && removeSelectedOption(item);
                }}
                className="pl-1 flex items-center border-0 outline-none focus:ring-0"
              >
                <IoMdClose size={16} />
              </button>
            </div>
          ))}
        </div>
        <button className="w-10 h-full absolute top-0 right-0 flex items-center justify-center outline-none focus:outline-none">
          {open ? (
            <MdKeyboardArrowUp
              size={16}
              onClick={() => {
                !disabled && setIsOpen(!open);
              }}
            />
          ) : (
            <MdKeyboardArrowDown
              size={16}
              onClick={() => {
                !disabled && setIsOpen(!open);
              }}
            />
          )}
        </button>
      </div>
      {open && (
        <div className="mt-2 w-full absolute to-full">
          <ul
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded shadow-lg overflow-y-auto"
            style={{ maxHeight: '250px' }}
          >
            {options.map((option) => {
              if (selected.includes(option)) {
                return (
                  <li
                    key={option}
                    className="pl-4 pr-6 py-1 border-b border-gray-300 dark:border-gray-600 cursor-pointer overflow-clip bg-blue-500 text-white"
                  >
                    {option}
                  </li>
                );
              }

              return (
                <li
                  key={option}
                  onClick={() => setSelected([...selected, option])}
                  className="pl-4 pr-6 py-1 border-b border-gray-300 dark:border-gray-600 cursor-pointer overflow-clip hover:bg-purple-100 dark:hover:bg-gray-700"
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChipsDropdown;
