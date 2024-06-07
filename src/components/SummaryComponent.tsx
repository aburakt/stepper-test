import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { formRowsState } from '../states/atoms';

const SummaryComponent: React.FC = () => {
  const rows = useRecoilValue(formRowsState);

  const handleEdit = () => {
    // Navigate to previous step
  };

  const handleSubmit = () => {
    // Submit request
  };

  return (
    <div className="form-container">
      <DataTable value={rows}>
        <Column field="firstDropdown" header="First Dropdown" />
        <Column field="secondDropdown" header="Second Dropdown" />
        <Column field="thirdDropdown" header="Third Dropdown" />
        <Column field="startDate" header="Start Date" />
        <Column field="endDate" header="End Date" />
      </DataTable>
      <div className="button-container p-mt-4 p-d-flex mt-3 p-jc-between flex justify-content-between">
        <Button label="Previous" onClick={handleEdit} className='p-button-sm w-11rem' icon="pi pi-arrow-left" />
        <Button label="Submit" onClick={handleSubmit} className='p-button-sm w-11rem' icon="pi pi-send" iconPos='right' severity='success' />
      </div>
    </div>
  );
};

export default SummaryComponent;
