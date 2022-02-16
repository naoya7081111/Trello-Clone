import React from 'react'
import { Task } from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const Tasks = (props) => {

  const { taskList, setTaskList } = props;

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='droppableId' >
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} >
              {taskList.length !== 0 && taskList.map((task, index) => (
                <div key={index}>
                  <Task task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
