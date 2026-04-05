import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return(
    <div className="min-h-screen flex flex-col bg-blue-300 dark:bg-gray-200 elegance:bg-elegance-400 radiation:bg-radiation-700">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
};


/**Ejemplo con destructuring de operation
 * 
 * Tratar de actualizar target y source
 * 
 * onDragStart={({operation}) => {
        console.log('Started dragging', operation.source.id);
        setSource(operation.source?.id);
        
      }}
 * 
 * onDragEnd={({operation}) => {
        if (operation.target) {
          console.log(`Dropped onto ${operation.target.id}`);
          setTarget(operation.target?.id);
        }
      }}

    {targets.map((id) => (
        <Droppable key={id} id={id}>
          {target === id ? draggable : `Droppable ${id}`}
        </Droppable>
      ))}
 */

/**En el ejemplo de arriba no se puede tener varios componentes draggable porque solo hay un target y no discierne
 * que objeto fue el que agarramos y soltamos, solo sabe donde se suelta y actualiza el target
 * 
 * onDragEnd={(event) => {
        if (event.canceled) return;

        setTarget(event.operation.target?.id);
  }}

  También el componente draggable tiene ref/id fijo

  onDragEnd={(event) => {
        if (event.canceled) return;

        console.log(event.operation.source?.id);
        setTarget(event.operation.target?.id);
  }}
*/
/*
function App() {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const {target} = event.operation;
        setIsDropped(target?.id === 'droppable');
      }}
    >
      {!isDropped && <Draggable />}

      <Droppable id="droppable">
        {isDropped && <Draggable />}
      </Droppable>
    </DragDropProvider>
  );
}

*/

export default App
