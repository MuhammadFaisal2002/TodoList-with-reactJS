import './App.css'; 
import { createRoot } from 'react-dom/client'; 
import TodoWrapper from './components/todowrapper'; 

function Main() {
  return (
    <>
      <TodoWrapper /> 
    </>
  );
}
const rootElement = document.getElementById('root'); 
if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(<Main />); 
}
