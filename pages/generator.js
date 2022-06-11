import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@components/common';
import { nanoid } from 'nanoid';

const PaletteCreator = dynamic(
  () => import('@components/palleteCreator/PaletteCreator'),
  { ssr: false },
);

function Generator() {
  const [items, setItems] = useState([
    { color: '#ffffff', id: nanoid() },
    { color: '#ffffff', id: nanoid() },
    { color: '#ffffff', id: nanoid() },
    { color: '#ffffff', id: nanoid() },
    { color: '#ffffff', id: nanoid() },
  ]);
  const handleAddItem = () => {
    if (items.length < 5) {
      setItems((prev) => [...prev, { color: '#ffffff', id: nanoid() }]);
    }
  };

  return (
    <div className="h-96">
      <div className="flex py-4">
        <Button onClick={handleAddItem}>Add Item</Button>
      </div>
      <PaletteCreator items={items} setItems={setItems} />
    </div>
  );
}

export default Generator;
