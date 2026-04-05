import React, { useRef, useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
//import { useSortable } from '@dnd-kit/react/sortable';
import { move } from '@dnd-kit/helpers';

import Sortable from './Sortable';
import SortableColumn from './SortableColumn';

export default function SortableSection() {
  //const [items, setItems] = useState([0,1,2,3,4,5]);
  const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  });

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setItems((items) => move(items, event));
      }}
    >

      <div className='inline-flex flex-row gap-5'>
          {Object.entries(items).map(([column, items]) => (
              <SortableColumn key={column} id={column}>
                {items.map((id, index) => (
                  <Sortable key={id} id={id} index={index} />
                  ))}
              </SortableColumn>
          ))}
      </div>
      {/* <ul className="list bg-amber-400">
        {items.map((id, index) => (
          <Sortable key={id} id={id} index={index} />
        ))}
      </ul> */}
    </DragDropProvider>
  );
}

