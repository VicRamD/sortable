import { useState, useEffect } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
//import { useSortable } from '@dnd-kit/react/sortable';
import { move } from '@dnd-kit/helpers';

import Sortable from './Sortable';
import SortableColumn from './SortableColumn';

import Column from './Column';

const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];



export default function SortableSection() {
  //const [items, setItems] = useState([0,1,2,3,4,5]);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [columns, setColumns] = useState(COLUMNS);
  const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
      acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
      return acc;
    }, {}));

  useEffect(()=>{
    console.log(columnsAndTasks)
  }, [columnsAndTasks]);

  /*const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  }); */


  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setColumnsAndTasks((items) => move(items, event));
      }}
    >

      <div className='inline-flex flex-row gap-5'>
          {Object.entries(columnsAndTasks).map(([columnId, tasksInCol]) => 
          {
            return <Column key={columnId} column={COLUMNS.find(col=> col.id === columnId)} 
            tasks={tasksInCol.map(id => tasks.find(task => task.id === id))}></Column>
          })}

          {/*Object.entries(items).map(([column, items]) => (
              <SortableColumn key={column} id={column}>
                {items.map((id, index) => (
                  <Sortable key={id} id={id} index={index}/>
                  ))}
              </SortableColumn>
          ))*/}
      </div>
      {/* <ul className="list bg-amber-400">
        {items.map((id, index) => (
          <Sortable key={id} id={id} index={index} />
        ))}
      </ul> */}
    </DragDropProvider>
  );
}

/**
 * Yes, you can use the move function with a structure like COLUMNS_AND_TASKS, but you need to transform your data into a
 *  grouped record format (e.g., { [columnId]: tasks[] }) before using move. After moving, map the result back to your original 
 * structure.

Reference: /react/guides/multiple-sortable-lists
 */