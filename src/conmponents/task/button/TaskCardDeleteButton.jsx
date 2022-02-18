import React from 'react'

export const TaskCardDeleteButton = (props) => {

  const { taskCardsList, setTaskCardsList, taskCard } = props;

  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => (e.id !== id)));
  }
  return (
    <div>
      <button className='taskCardDeleteButton'onClick={() => taskCardDeleteButton(taskCard.id)} >
        <i className="fa-regular fa-xmark"></i>
      </button>
    </div>
  )
}
