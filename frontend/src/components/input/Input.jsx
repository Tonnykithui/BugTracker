import React from 'react'

const Input = ({ placeholder, styles, ref, value, onchange,...rest }) => {
  return (
    <input type="text" {...rest} id="" maxLength='50' 
    placeholder={placeholder} 
    className={styles} ref={ref}/>
    
  )
}

export default Input