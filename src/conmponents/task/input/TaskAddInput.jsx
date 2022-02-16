import React from 'react'

export const TaskAddInput = (props) => {

  const { inputText, setInputText, taskList, setTaskList } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText == '') return;
    // カードを追加する
    setTaskList([...taskList, {id: taskList.length, text: inputText, draggableId: `task-${taskList.length}`}])
    setInputText('');
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className='taskAddInput' placeholder='add a task' onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}
 