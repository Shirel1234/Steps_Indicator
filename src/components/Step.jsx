import React from 'react'

const Step = ({text, isActive}) => {
  return (
    <div>
      <label className='step' style={{ backgroundColor: isActive ? '#add8e6' : 'rgb(152, 154, 156)' }}>{isActive? '✓' :text}</label>
    </div>
  )
}

export default Step
