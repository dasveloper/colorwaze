import { colord } from 'colord';
import { Draggable } from 'react-beautiful-dnd';
import { Trash, Palette } from 'phosphor-react';
import useClickOutside from '@hooks/useClickOutside';
import {
  useState, useRef, useCallback,
} from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const getPalettePosition = (index) => {
  let modifier = '';
  if (index < 2) { modifier = 'left-0'; }
  if (index > 2) { modifier = 'right-0'; }
  return `${modifier} sm:left-1/2 sm:right-auto sm:-translate-x-1/2`;
};
export default function PaletteCreatorItem({ item, index, setItems }) {
  const popover = useRef();
  const [isOpen, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(popover, close);
  return (
    <Draggable draggableId={item.id} index={index} isDragDisabled={isOpen}>
      {(p, s) => {
        const color = colord(item.color);
        return (
          <div
            ref={p.innerRef}
            {...p.draggableProps}
            {...p.dragHandleProps}
            className={`${s.isDragging ? 'shadow-lg' : ''} flex-1 bg-white`}
            style={{ ...p.draggableProps.style }}
          >
            <div className={`${color.isLight() ? 'text-gray-900' : 'text-white'} group flex flex-col h-full w-full`}>
              <div className="flex-1 w-full h-full flex justify-center items-center" style={{ background: color.toHex() }}>
                <span className="text-base uppercase font-medium " style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}>{color.toHex()}</span>
              </div>
              <div className="flex flex-col space-y-4 py-4 justify-between items-center">
                <button
                  type="button"
                  onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                  className="text-gray-900 border-gray-300 inline-flex items-center p-1  rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 border"
                >
                  <Trash className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Remove item</span>
                </button>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="text-gray-900 border-gray-300 inline-flex items-center p-1  rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 border"
                  >
                    <Palette className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Change color</span>
                  </button>
                  {isOpen && (
                  <div className={`${getPalettePosition(index)} palette-picker absolute bottom-full mb-2  rounded-md shadow-md z-40`} ref={popover}>
                    <HexColorPicker
                      color={item.color}
                      onChange={(c) => setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, color: c } : i)))}
                    />
                    <HexColorInput
                      id="color-picker"
                      prefixed
                      type="text"
                      color={item.color}
                      onChange={(c) => setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, color: c } : i)))}
                      className="px-4 py-1.5 rounded-b-lg block w-full border-0 text-gray-900 placeholder-gray-500 focus:ring-0 text-sm sm:text-base"
                    />
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
