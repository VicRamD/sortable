import {useState} from 'react';
import {DragDropProvider} from '@dnd-kit/react';
import {move} from '@dnd-kit/helpers';

import Sortable from '../drag-drop/Sortable';
import SortableSection from '../drag-drop/SortableSection';

const Main = () => {
   //const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <main className="flex lg:flex-row justify-center">
        <SortableSection/>
        {/* <DragDropProvider
          onDragEnd={(event) => {
            //console.log(event);
            //console.log(move(items, event)); cambia el orden de la lista
            setItems((items) => move(items, event));
          }}
        >
          <div className='bg-amber-300 p-2 inline-flex flex-col gap-5'>
            {items.map((id, index) => (
              <Sortable key={id} id={id} index={index} />
            ))}
          </div>  
        </DragDropProvider> */}
        
    </main>
  )
}

export default Main