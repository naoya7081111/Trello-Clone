import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  const [inputCartTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  }

  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
    console.log(inputCartTitle)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  return (
    <div onClick={handleClick}>
      {isClick ? (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        </form>
        ) : (
        <h3>{inputCartTitle}</h3>
        )}
    </div>
  )
}
