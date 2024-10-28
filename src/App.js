
import { useState } from 'react';
import './App.css';
import StepList from './components/StepList';

function App() {
  const totalSteps=7;
  const [step, setStep]=useState(0);

  const handleNext = () => {
    setStep(prevStep => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  return (
    <div className="App">
      <button className='btn' disabled={ step <= 1 ? true : false} onClick={handlePrev}>Prev</button>
      <button className='btn' disabled={ step >= totalSteps ? true : false} onClick={handleNext}>Next</button>
      <StepList currentStep={step} totalSteps={totalSteps}/>
      <label>QA:{step}</label>
    </div>
  );
}

export default App;
