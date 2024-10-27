import React from 'react'
import Step from './Step'

const StepList = ({currentStep, totalSteps}) => {
  return (
    <div className='steps'>
      {Array.from({ length: totalSteps }, (_, index) => (
        <Step key={index} text={index + 1} isActive={currentStep > index} />
      ))}
      {/* <Step text="1" isActive={currentStep >=1}/>
      <Step text="2" isActive={currentStep >=2}/>
      <Step text="3" isActive={currentStep>=3}/>
      <Step text="4" isActive={currentStep>=4}/> */}
    </div>
  )
}

export default StepList
