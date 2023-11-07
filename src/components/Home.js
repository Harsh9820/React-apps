import React, { useReducer, useState } from 'react'
import ListTask from './ListTask'
import AddTask from './AddTask';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function Home() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
   /*const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false,
            },
        ])
    }

    const handleChangeTask = (task) => {
        setTasks(
            tasks.map((t) => {
                if(t.id === task.id){
                    return task;
                }
                else{
                    return t;
                }    
            })
        )
    }

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }*/
    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'change',
            task: task,
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'delete',
            id: taskId,
        })
    }
  return (
    <div>
        <AddTask onAddTask={handleAddTask} />
        <ListTask tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask} /> 
    </div>
  )
}

const  taskReducer = (tasks, action) => {
    switch(action.type){
        case 'added' :
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                }
            ]
        case 'change' :
            return tasks.map((t) => {
                if(t.id === action.task.id){
                    return action.task
                }
                else{
                    return t
                }
            })
        case 'delete': 
            return tasks.filter((t) => t.id !== action.id);
        
        default: 
            throw Error('Unknown action: ' + action.type);
        
    }
}
export default Home