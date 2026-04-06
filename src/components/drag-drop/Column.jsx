import {useDroppable} from '@dnd-kit/react';
import {CollisionPriority} from '@dnd-kit/abstract';

import TaskCard from './TaskCard';
import { useEffect } from 'react';

function Column({column, tasks}) {
  const {ref} = useDroppable({
    id: column.id,
    type: 'column',
    accept: ['item'],
    collisionPriority: CollisionPriority.Low,
  });

  /*useEffect(()=>{
    console.log("En columna: " + column.id)
    console.log(tasks);
  }, [tasks, column]) */

  return (
    <div className='flex min-w-72 md:w-80 flex-col rounde-lg bg-neutral-200 dark:bg-neutral-800 radiation:bg-amber-900 
    p-4'>
        <h2 className='mb-4  text-black dark:text-white radiation:text-radiation-500 text-2xl 
        font-semibold border-b-2 border-black dark:border-white radiation:border-radiation-500
        pb-2'>{column.title}</h2>
        <div ref={ref} className='flex flex-1 flex-col gap-4'>
            {tasks.map((task, index) => <TaskCard key={task.id} task={task} index={index}></TaskCard>)}
        </div>
    </div>
  );
}

export default Column;