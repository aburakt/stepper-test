// SummaryComponent.tsx
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import  React from 'react';
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
    <div>
      <DataTable value={rows}>
        <Column field="firstDropdown" header="First Dropdown" />
        <Column field="secondDropdown" header="Second Dropdown" />
        <Column field="thirdDropdown" header="Third Dropdown" />
        <Column field="startDate" header="Start Date" />
        <Column field="endDate" header="End Date" />
      </DataTable>
      <Button label="Edit" onClick={handleEdit} />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default SummaryComponent;
