/* eslint-disable jsx-a11y/label-has-associated-control */
import { HexColorInput, RgbaColorPicker, HexColorPicker } from 'react-colorful';
import useClickOutside from '@hooks/useClickOutside';
import {
  useState, useRef, useCallback,
} from 'react';
import { colord } from 'colord';

export default function ColorPicker({
  color, onChange, showLabel, label, isHex,
}) {
  const popover = useRef();
  const [isOpen, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(popover, close);

  const Component = isHex ? HexColorPicker : RgbaColorPicker;
  return (
    <div>
      <label htmlFor="color-picker" className={`${showLabel ? '' : 'sr-only'} block mb-2 text-base font-medium text-gray-900`}>{label || 'Choose color'}</label>
      <div className="relative border border-gray-300 rounded-md pl-3 pr-1  py-1 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 flex items-center">
        <HexColorInput
          id="color-picker"
          prefixed
          alpha={!isHex}
          type="text"
          color={color}
          onChange={onChange}
          className="p-0 block w-full border-0 text-gray-900 placeholder-gray-500 focus:ring-0 text-sm sm:text-base"
        />
        <button
          type="submit"
          onClick={() => setOpen(true)}
          className="border border-gray-300 text-white right-2.5 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-sm px-2 py-2 w-10 h-10"
          style={{ backgroundColor: color }}
        >
          <span className="sr-only">Choose color</span>
        </button>
        {isOpen && (
        <div className="absolute top-full mt-2 right-0 rounded-md shadow-md" ref={popover}>
          <Component
            color={isHex ? colord(color).toHex() : colord(color).toRgb()}
            onChange={(c) => onChange(colord(c).toHex())}

          />
        </div>
        )}
      </div>
    </div>
  );
}
