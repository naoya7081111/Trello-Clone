import React, { useState } from 'react'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'

export const TaskCard = (props) => {

  const { taskCardsList, setTaskCardsList, taskCard } = props;

  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState("");


  return (
    <div className='TaskCard'>
      <div className="taskCardTitleAndTaskCardDeleteButton">
        <TaskCardTitle />
        <TaskCardDeleteButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} />
      </div>
        <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
        <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  )
}
