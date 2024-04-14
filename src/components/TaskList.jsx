import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Icon from './Icon';
import React from 'react';

const TaskList = ({ tasks, deleteTask, editTask}) => {
    return (
    
    // Componente "Table" de react-bootstrap
    <Table responsive className="table-fluid" style={{width:"100%"}}>
        <thead>
        <tr>            
            <th>Tarea</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
            <tr  key={task.id}>                
                <td className="align-middle" style={{textAlign:'left'}}>
                    <div className="fs-5 d-blue">{task.text}</div>
                    <div className="text-secondary">{task.desc}</div>                    
                </td>
                <td className="align-middle" style={{width:'100px'}}>
                    <Icon icon="edit fa-solid fa-pen-to-square m-1" onClickFunction={()=>editTask(task)}/>
                    <Icon icon="delete fa-regular fa-trash-can m-1" onClickFunction={()=>deleteTask(task.id)}/>
                </td>
            </tr>
        ))}
        </tbody>
    </Table >
    );
  };
  
  export default TaskList;