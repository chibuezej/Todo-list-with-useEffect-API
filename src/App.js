 
import { Route, Routes} from 'react-router-dom';
import Todos from "./component/Todos";
import './App.css';
import Todo from "./component/Todo"
function App() {
  return (
    <div className="App">
    <h1>Todo list</h1>
    <Routes>
    <Route exact path='/' element={<Todos />} />
    <Route path='/todo/:id' element={<Todo />} />
    </Routes>
    </div>
  );
}

export default App;
