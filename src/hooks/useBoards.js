import { useState, useEffect } from "react";


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

export const useBoard = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
      const [columns, setColumns] = useState(COLUMNS);
      const [columnsAndTasks, setColumnsAndTasks] = useState(COLUMNS.reduce((acc, column) => {
          acc[column.id] = INITIAL_TASKS.filter(task => task.status === column.id).map(task => task.id);
          return acc;
      }, {}));

    useEffect(()=>{
        console.log(columnsAndTasks);
      }, [columnsAndTasks]);

      return {tasks, setTasks, columns, setColumns, columnsAndTasks, setColumnsAndTasks}
}