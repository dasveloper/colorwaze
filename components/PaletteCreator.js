import { colord } from 'colord';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from '@components/common';
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function PaletteCreator({ items, setItems }) {
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const orderedItems = reorder(
      items,
      result.source.index,
      result.destination.index,
    );

    setItems(orderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-gray-50 h-full divide-x flex border overflow-hidden rounded-lg"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(p, s) => {
                  const color = colord(item.color);
                  return (
                    <div
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      className={`${s.isDragging ? 'shadow-lg' : ''} flex-1 hover:basis-20 overflow-hidden`}
                      style={{ ...p.draggableProps.style, background: color.toHex() }}
                    >
                      <div className={`${color.isLight() ? 'text-gray-900' : 'text-white'} group flex flex-col space-y-2 items-center justify-center h-full w-full`}>
                        <span className="text-base invisible group-hover:visible md:visible uppercase font-medium">{color.toHex()}</span>
                        <Button variant="light" onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}>Remove Item</Button>

                      </div>
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default PaletteCreator;
