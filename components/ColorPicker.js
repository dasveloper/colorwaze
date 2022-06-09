import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

import useOnClickOutside from '@hooks/useOnClickOutside';

export default function PopoverPicker({ color, onChange }) {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useOnClickOutside(popover, close);

  return (
    <div className="flex space-x-2">
      <div className="flex-1 relative rounded-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-lg">#</span>
        </div>
        <HexColorInput
          name="hex"
          type="text"
          id="hex"
          color={color}
          onChange={onChange}
          size={1}
          className="focus:ring-indigo-500 focus:border-indigo-500 block h-full w-full pl-8 sm:text-lg border-gray-300 rounded-md"
        />
      </div>
      <div className="relative">
        <button
          id="colorPicker"
          type="button"
          className="h-12 w-12 rounded-md border border-gray-300"
          style={{ backgroundColor: color }}
          onClick={() => toggle(true)}
        >
          <span className="sr-only">Toggle color picker</span>
        </button>

        {isOpen && (
        <div className="absolute right-0 top-full mt-2 rounded-md shadow-md" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
        )}
      </div>
    </div>
  );
}
