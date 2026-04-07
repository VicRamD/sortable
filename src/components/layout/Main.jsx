import {useState} from 'react';
import {DragDropProvider} from '@dnd-kit/react';
import {move} from '@dnd-kit/helpers';

import Sortable from '../drag-drop/Sortable';
import SortableSection from '../drag-drop/SortableSection';

import { KanbanBoardProvider } from '../../contexts/KanbanBoardContext'; 

const Main = () => {
   //const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <main className="flex lg:flex-row justify-center">
      <KanbanBoardProvider>
          <SortableSection/>
      </KanbanBoardProvider>
    </main>
  )
}

export default Main