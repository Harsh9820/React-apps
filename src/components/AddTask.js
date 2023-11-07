import React, { useState } from 'react'

function AddTask({onAddTask}) {
    const [text, setText] = useState('')
  return (
    <div>
        <input type= "text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={
          () => {setText(''); 
          onAddTask(text);
          }}>
            Add Task
          </button>
    </div>
  )
}

export default AddTask