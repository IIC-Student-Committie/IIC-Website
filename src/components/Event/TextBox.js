import React from 'react'

const TextBox = (props) => {
  return (
    <div className='text-box'>
<h3>{props.title}</h3>
<p>
{props.desc}
</p>

    </div>
  )
}

export default TextBox