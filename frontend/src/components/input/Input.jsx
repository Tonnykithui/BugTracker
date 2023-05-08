import React from 'react'

const Input = ({ placeholder, styles, ref,...rest }) => {
  return (
    <input type="text" {...rest} id="" placeholder={placeholder} className={styles} ref={ref}/>
  )
}

export default Input