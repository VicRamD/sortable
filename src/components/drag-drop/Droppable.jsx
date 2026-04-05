import {useDroppable} from '@dnd-kit/react';

function Droppable({id, children}) {
  const {ref} = useDroppable({
    id,
  });

  return (
    <div ref={ref} style={{width: 300, height: 300}} className='bg-amber-300 p-3 m-2'>
      {children}
    </div>
  );
}

export default Droppable;