import React from 'react'

function buttons({onClickHandler,value,title}) {
  return (
    <button onClick={onClickHandler} value={value} className='btns'>{title}</button>
  )
}

export default buttons

