import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PaletteCreatorItem from '@components/palleteCreator/PaletteCreatorItem';

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
            className="h-full flex divide-x border"
          >
            {items.map((item, index) => (
              <PaletteCreatorItem key={item.id} item={item} index={index} setItems={setItems} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default PaletteCreator;
