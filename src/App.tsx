import 'primeflex/primeflex.css'; // flex
import 'primeicons/primeicons.css'; //icons
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { useState } from 'react';
import FormComponent from './components/FormComponent';
import SecondStepComponent from './components/SecondStepComponent';
import SummaryComponent from './components/SummaryComponent';

function App() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="app-container p-fluid">
      {step === 1 && <FormComponent />}
      {step === 2 && <SecondStepComponent />}
      {step === 3 && <SummaryComponent />}
      <div className="navigation-buttons">
        {step > 1 && <Button label="Previous" onClick={handlePreviousStep} className="p-button-secondary w-3" />}
        {step < 3 && <Button label="Next" onClick={handleNextStep} className="p-button-primary w-3" />}
      </div>
    </div>
  );
}

export default App
