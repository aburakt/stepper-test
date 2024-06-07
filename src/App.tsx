import 'primeflex/primeflex.css'; // flex
import 'primeicons/primeicons.css'; // icons
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css'; // core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useRef } from 'react';
import FormComponent from './components/FormComponent';
import SecondStepComponent from './components/SecondStepComponent';
import SummaryComponent from './components/SummaryComponent';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stepperRef = useRef<any>(null);


  return (
    <div className="app-container p-fluid">
      <Stepper ref={stepperRef}>
        <StepperPanel header="Form">
          <div className="flex flex-column">
            <FormComponent />
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} className="p-button-sm w-11rem ml-auto" />
          </div>
        </StepperPanel>
        <StepperPanel header="Details">
          <div className="flex flex-column">
            <SecondStepComponent />
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} className="p-button-sm w-11rem mr-2" />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} className="p-button-sm w-11rem ml-auto" />
          </div>
        </StepperPanel>
        <StepperPanel header="Summary">
          <div className="flex flex-column">
            <SummaryComponent />
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button label="Back" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} className="p-button-sm w-11rem" />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}

export default App;
