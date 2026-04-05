import {useDraggable} from '@dnd-kit/react';


function TaskCard({task}) {
  const {ref} = useDraggable({
    id: task.id
  });

  return (
    <div ref={ref} className="cursor-grab rounded-lg bg-white dark:bg-neutral-700 radiation:bg-radiation-700 p-4 shadow-sm hover:shadow-md">
        <h3 className="font-medium dark:text-neutral-100 radiation:text-radiation-50">{task.title}</h3>
        <p className="mt-2 text-sm dark:text-neutral-400 radiation:text-radiation-100">{task.description}</p>
    </div>
    
  );
}

export default TaskCard;