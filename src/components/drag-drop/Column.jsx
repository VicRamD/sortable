import {useDroppable} from '@dnd-kit/react';

import TaskCard from './TaskCard';

function Column({column, tasks}) {
  const {ref} = useDroppable({
    id: column.id
  });

  return (
    <div className='flex min-w-72 md:w-80 flex-col rounde-lg bg-neutral-200 dark:bg-neutral-800 radiation:bg-amber-900 
    p-4'>
        <h2 className='mb-4  text-black dark:text-white radiation:text-radiation-500 text-2xl 
        font-semibold border-b-2 border-black dark:border-white radiation:border-radiation-500
        pb-2'>{column.title}</h2>
        <div ref={ref} className='flex flex-1 flex-col gap-4'>
            {tasks.map((task) => <TaskCard key={task.id} task={task}></TaskCard>)}
        </div>
    </div>
  );
}

export default Column;