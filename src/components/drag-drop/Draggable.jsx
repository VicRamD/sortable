import {useDraggable} from '@dnd-kit/react';


function Draggable({id, children}) {
  const {ref} = useDraggable({
    id
  });

  return (
    <button ref={ref} className='p-2 border-2 border-black rounded-xl w-52 bg-white' >
      {children}
    </button>
  );
}


/**
 * function Draggable({id}) {
  const {ref, isDragSource} = useDraggable({id});
  return <div ref={ref} style={{background: isDragSource ? 'blue' : 'grey'}}>Drag me</div>;
}
 * 
 */

export default Draggable;