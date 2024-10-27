
import { useState } from 'react';
import './App.css';
import StepList from './components/StepList';

function App() {
  const [step, setStep]=useState(0);

  const handleNext = () => {
    setStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  return (
    <div className="App">
      <button className='btn' onClick={handlePrev}>Prev</button>
      <button className='btn' onClick={handleNext}>Next</button>
      <StepList currentStep={step}/>
      <label>QA:{step}</label>
    </div>
  );
}

export default App;
