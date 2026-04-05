import React, { useRef, useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import { move } from '@dnd-kit/helpers';

import Sortable from './Sortable';

export default function SortableSection() {
  const [items, setItems] = useState([0,1,2,3,4,5]);

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setItems((items) => move(items, event));
      }}
    >
      <ul className="list bg-amber-400">
        {items.map((id, index) => (
          <Sortable key={id} id={id} index={index} />
        ))}
      </ul>
    </DragDropProvider>
  );
}

