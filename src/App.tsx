import 'primeflex/primeflex.css'; // flex
import 'primeicons/primeicons.css'; //icons
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import FormComponent from './components/FormComponent';
import SecondStepComponent from './components/SecondStepComponent';
import SummaryComponent from './components/SummaryComponent';
import { formRowsState } from './states/atoms';

function App() {
  const [step, setStep] = useState(1);

  const consoleFormRows = useRecoilValue(formRowsState);
  console.log('consoleFormRows', consoleFormRows)

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="p-fluid">
      {step === 1 && <FormComponent />}
      {step === 2 && <SecondStepComponent />}
      {step === 3 && <SummaryComponent />}
      <div className="p-mt-4">
        {step > 1 && <Button label="Previous" onClick={handlePreviousStep} />}
        {step < 3 && <Button label="Next" onClick={handleNextStep} />}
      </div>
    </div>
  )
}

export default App
