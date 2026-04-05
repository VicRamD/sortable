import { useRef, useState } from 'react';
import {useSortable} from '@dnd-kit/react/sortable';

/*const Sortable = ({id, index}) => {
    const {ref} = useSortable({id,index});

    return (
        <button className='p-4 bg-emerald-400' ref={ref}>Item {id}</button>
    )
} */

function Sortable({ id, index, column }) {
  const [element, setElement] = useState(null);
  const handleRef = useRef(null);
  
  const { isDragging } = useSortable({ id, index, element, handle: handleRef, 
    group: column,
    type: 'item',
    accept: ['item'], });

  return (
    <li ref={setElement} className="item" data-shadow={isDragging || undefined}>
      {id}
      <button ref={handleRef} className="handle" />
    </li>
  );
}

/**
 * export function Item({id, column, index}) {
  const {ref} = useSortable({
    id,
    index,
    group: column,
    type: 'item',
    accept: ['item'],
  });

  return <button ref={ref}>{id}</button>;
}
 */

export default Sortable;
