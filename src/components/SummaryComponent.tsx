// SummaryComponent.tsx
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
      <DataTable value={[rows]}>
        <Column field="firstDropdown" header="First Dropdown" />
        <Column field="secondDropdown" header="Second Dropdown" />
        <Column field="thirdDropdown" header="Third Dropdown" />
        <Column field="startDate" header="Start Date" />
        <Column field="endDate" header="End Date" />
      </DataTable>
      <div className="button-container">
        <Button label="Previous" onClick={handleEdit} />
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SummaryComponent;
