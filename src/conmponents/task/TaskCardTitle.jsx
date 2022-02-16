import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  const [inputCartTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  }

  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ? (
      <form onSubmit={handleSubmit}>
        <input type="text" className='taskCardTitleInput' onChange={handleChange} onBlur={handleBlur} value={inputCartTitle} autoFocus maxLength={10}/>
        </form>
        ) : (
        <h3>{inputCartTitle}</h3>
        )}
    </div>
  )
}
