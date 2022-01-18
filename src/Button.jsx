import React from 'react'

const Button = (props) => {
  const { clickFunction } = props
  const style = props.style || 'default'
  const buttonText = props.buttonText || 'No text supplied'

  return (
    <>
      <button onClick={clickFunction} className='btn rounded-lg font-sans bg-yellow-400 text-white'>{buttonText}</button>
    </>
  )
}

export default Button
