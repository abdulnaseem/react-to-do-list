import NewTask from "./NewTask";
import TaskItem from "./TaskItem";


const Tasks = ({ tasks, onAdd, onDelete, onEditSave, onComplete }) => {

    return (
        <div id="pad">
            <NewTask onAdd={onAdd} />
            <div>
                {tasks.length === 0 && <p className="mt-3">There are currently no tasks to do.</p>}

                {tasks.length > 0 &&
                    <ul>
                        {tasks.map((task) => {
                            return (
                                <TaskItem 
                                    key={task.id} 
                                    task={task} 
                                    onDelete={onDelete} 
                                    onEditSave={onEditSave} 
                                    onComplete={onComplete} 
                                />
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    )
};

export default Tasks;