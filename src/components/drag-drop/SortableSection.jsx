import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';

import Column from './Column';

import { useKanbanBoardContext } from '../../contexts/KanbanBoardContext';


export default function SortableSection() {

  const {tasks, columns, columnsAndTasks, setColumnsAndTasks} = useKanbanBoardContext();


  /*const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  }); formato necesario para la función move */


  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setColumnsAndTasks((items) => move(items, event));
      }}
    >

      <div className='inline-flex flex-row gap-5'>
          {Object.entries(columnsAndTasks).map(([columnId, tasksInCol]) => 
          {
            return <Column key={columnId} column={columns.find(col=> col.id === columnId)} 
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
    </DragDropProvider>
  );
}

/**
 * Yes, you can use the move function with a structure like COLUMNS_AND_TASKS, but you need to transform your data into a
 *  grouped record format (e.g., { [columnId]: tasks[] }) before using move. After moving, map the result back to your original 
 * structure.

Reference: /react/guides/multiple-sortable-lists
 */