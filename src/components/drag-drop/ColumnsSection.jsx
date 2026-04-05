import { useState } from "react";
import Column from "./Column"
import {DragDropProvider} from '@dnd-kit/react';


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


const ColumnsSection = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  /*useEffect(()=>{
    console.log(tasks);
  }, [tasks]) */

  return (
    <DragDropProvider
      onDragEnd={({operation}) => {
        const {source, target} = operation;

        if(!target) return;

        const taskId = source.id;
        const newStatus = target.id;

        setTasks(()=> tasks.map(task => task.id === taskId ? {
          ...task,
          status: newStatus
        } : task))
      }}
    >
      {/*!target ? draggable : null*/}

      <div className="p-4 w-full">
        <div className="flex gap-4 md:gap-8 overflow-x-auto">
          {COLUMNS.map(column => <Column key={column.id} column={column} tasks={tasks.filter(task => task.status === column.id)}></Column>)}
        </div>
      </div>

    </DragDropProvider>
  );
}

export default ColumnsSection;