import React from 'react'
import { Task } from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Tasks = (props) => {

  const { taskList, setTaskList } = props;

  const reorder = (taskList, startIndex, endIndex) => {
    // タスクの並び替え
    const remove = taskList.splice(startIndex, 1); //ドラッグ元を削除
    taskList.splice(endIndex, 0, remove[0]); //ドラッグしたものを目的地に配置  
  }

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppableId' >
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} >
              {taskList.length !== 0 && taskList.map((task, index) => (
                <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} key={task.id}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
