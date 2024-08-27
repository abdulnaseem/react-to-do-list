import { useState } from "react";
import EditTask from "./EditTask";

const TaskItem = ({ task, onDelete, onEditSave, onComplete }) => {
    const [taskState, setTaskState] = useState({
        editItem: undefined
    });

    const [checked, setChecked] = useState(false);

    const handleEditTask = () => {
        setTaskState(prevState => {
            return {
                ...prevState,
                editItem: null
            }
        });
    }

    const handleCancelEditTask = () => {
        setTaskState(prevState => {
            return {
                ...prevState,
                editItem: undefined
            }
        });
    }

    const handleChange = (event) => {
        setChecked(!checked);
    }
    //console.log("TaskItem: " + checked);

    let completed = 'task-item-text col';
    if(task.completed) {
        completed = 'task-item-text col crossed';
    }

    return (
        <li key={task.id}>
            <div className="row mt-4 me-4">
                <input className="col" type="checkbox" onChange={handleChange} checked={task.completed} onClick={() => onComplete(task.id, checked)} />
                <p className={completed}>{task.text}</p>
                {taskState.editItem === undefined && 
                    <>
                        <button className="col button-icon btn btn-secondary me-1" onClick={handleEditTask}><i class="bi bi-pencil-square"></i></button>
                        <button className="col button-icon btn btn-outline-danger -me-5" onClick={() => onDelete(task.id)}><i class="bi bi-trash"></i></button>
                    </>
                }
            </div>
            
            {taskState.editItem === null && 
                <EditTask id={task.id} onEditSaveTask={onEditSave} onCancel={handleCancelEditTask} />
            }
        </li>
    )
};

export default TaskItem;