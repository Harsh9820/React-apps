import React, { useState } from 'react'

function ListTask( {tasks, onChangeTask, onDeleteTask} ) {
  return (
        <ul>
            { tasks.map((task) => (
                    <li key={task.id}>
                        <Task key={task.id} task={task} changeTask={onChangeTask} deleteTask={onDeleteTask}/> 
                    </li>
                )
            )}
        </ul>
  )
}

function Task( {task, changeTask, deleteTask} ){
    const [edit, setEdit] = useState(false)
    let show;
    if(edit){
        show = (
            <>
                <input value={task.text} onChange={
                    (e) => { changeTask(
                        {
                            ...task,
                            text: e.target.value,
                        }
                    );
                }}
                />
                    <button onClick={() => setEdit(false)}>Save</button>
            </>
        );
    }
    else{
        show = (
            <>
                {task.text}
                <button onClick={() => setEdit(true)}>Edit</button>
            </>
        );
    }

    return (
            <label>
                <input type="checkbox" checked={task.done} 
                onChange={(e) => {
                    changeTask({
                            ...task,
                            done: e.target.checked,
                        });
                }}
                />
            
            {show}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </label>
    )
}

export default ListTask