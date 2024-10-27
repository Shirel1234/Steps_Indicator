import React from 'react'
import Step from './Step'

const StepList = ({currentStep}) => {
  return (
    <div className='steps'>
      <Step text="1" isActive={currentStep >=1}/>
      <Step text="2" isActive={currentStep >=2}/>
      <Step text="3" isActive={currentStep>=3}/>
      <Step text="4" isActive={currentStep>=4}/>
    </div>
  )
}

export default StepList
