import React from "react";
import './TaskList.css'
// import { tasks } from "../../mocks/tasks"




const TaskList = ({itemsList}) =>{
  

    return(

        <ul className="todo-list">
        {itemsList.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    )
}

export default TaskList;