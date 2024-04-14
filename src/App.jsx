import React, {useState} from 'react';
import Text from './components/Text';
import './styles/App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(null);  

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (task) => {  
    setEditMode(true);
    setEditedTask(task);
  };

  return (
    <div className="App">
      <div className="form__container">
        <div className="flex__container flex__column">
          <Text renderAs="h1" content="Listado de Tareas" />
          <hr></hr>
          <TaskForm
            addTask={addTask}
            editMode={editMode}
            editedTask={editedTask}  
            setEditMode={setEditMode}
            setEditedTask={setEditedTask}  
            tasks={tasks}  
            setTasks={setTasks}  
          />
          <div className="width--100">
            <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
