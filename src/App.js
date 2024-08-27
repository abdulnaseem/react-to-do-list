import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({
    tasks: [
      {
        id: 1,
        text: 'Clean',
        completed: false
      }
    ],
    filter: 'all'
  });


  const handleAddTask = (text) => {
    setData((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        completed: false
      };

      return {
        tasks: [...prevState.tasks, newTask]
      }
    });
  };

  const handleDeleteTask = (id) => {
    setData((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  };

  const handleEditSaveTask = (id, text) => {
    setData((prevState) => {
      return {
        tasks: prevState.tasks.map((task) => {
          if(task.id === id) {
            task.text = text;
          }
          return task;
        })
      }
    });
  }

  const handleCompleteTask = (id, checked) => {
    setData(prevState => {
      return {
        tasks: prevState.tasks.map((task) => {
          if(task.id === id) {
            task.completed = !checked;
          }
          return task;
        })
      }
    });
  }

  const filter = (filter) => {
    setData(prevState => {
      return {
        tasks: [...prevState.tasks],
        filter: prevState.filter = filter
      }
    })
  }
  //filter the tasks here

  

  let filteredDataTasks = data.tasks;
  if(data.filter === "completed") {
    filteredDataTasks = filteredDataTasks.filter(task => task.completed);
  }
  else if(data.filter === "to-do") {
    filteredDataTasks = filteredDataTasks.filter(task => !task.completed);
  }

  console.log(data.filter);
  console.log(data.tasks);

  return (
    <main className='m-8'>

      <Header filter={filter} />

      <Tasks tasks={filteredDataTasks} onAdd={handleAddTask} onDelete={handleDeleteTask} onEditSave={handleEditSaveTask} onComplete={handleCompleteTask} />

    </main>
  );
}

export default App;
