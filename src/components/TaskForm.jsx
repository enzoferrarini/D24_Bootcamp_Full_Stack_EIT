import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';

const TaskForm = ({ addTask, editMode, editedTask, setEditMode, setEditedTask,tasks, setTasks }) => {
  const [taskText, setTaskText] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  useEffect(() => {
    if (editMode && editedTask) {
      setTaskText(editedTask.text);
      setTaskDesc(editedTask.desc); 
    } else {
      setTaskText('');
      setTaskDesc('');
    }
  }, [editMode, editedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      if (editMode) {
          const updatedTasks = tasks.map((task) => {
            if (task.id === editedTask.id) {
              return {
                ...task,
                text: taskText.trim(),
                desc: taskDesc.trim(),
              };
            }
            return task;
          });
  
          setTasks(updatedTasks);
          setEditMode(false);
          setEditedTask(null);
        } 
        else {
          addTask({
          id: Date.now(),
          text: taskText.trim(),
          desc: taskDesc.trim(),
        });
      }
      setTaskText('');
      setTaskDesc('');
    }
  };

  return (
    <form class onSubmit={handleSubmit}>
      <div className="flex__container flex__column flex__align--end">
        <Input
          type={'text'}
          placeholder={'Ingrese Nombre'}
          value={taskText}
          className={"form-control"}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Input
          type={'text'}
          placeholder={'Ingrese Descripcion'}
          value={taskDesc}
          className={"form-control"}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <Button label={editMode ? 'Guardar Cambios' : 'Agregar Tarea'} type="submit" className={"btn btn-success"} />
       
      </div>
    </form>
  );
};

export default TaskForm;
