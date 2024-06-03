// FormComponent.tsx
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import React from 'react';
import { useRecoilState } from 'recoil';
import { FormRow, formRowsState } from '../states/atoms';

const FormComponent: React.FC = () => {
  const [rows, setRows] = useRecoilState(formRowsState);

  const handleDropdownChange = (index: number, key: keyof FormRow, value: unknown) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [key]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = (index: number) => {
    const newRow: FormRow = {
      id: rows.length + 1,
      firstDropdown: rows[index].firstDropdown,
      secondDropdown: null,
      thirdDropdown: [],
      startDate: null,
      endDate: null,
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index: number) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  return (
    <div className='flex'>
      {rows.map((row, index) => (
        <div key={row.id} className="p-grid p-align-center p-mb-2">
          <Dropdown
            value={row.firstDropdown}
            options={[{ label: 'First 1', value: 'First 1' }, { label: 'First 2', value: 'First 2' }]}
            onChange={(e) => handleDropdownChange(index, 'firstDropdown', e.value)}
            placeholder="Select First"
            className="p-col"
          />
          <Dropdown
            value={row.secondDropdown}
            options={row.firstDropdown === 'First 1' ? [{ label: 'Second 1', value: 'Second 1' }, { label: 'Second 2', value: 'Second 2' }] : [{ label: 'Second 3', value: 'Second 3' }, { label: 'Second 4', value: 'Second 4' }]}
            onChange={(e) => handleDropdownChange(index, 'secondDropdown', e.value)}
            placeholder="Select Second"
            className="p-col"
          />
          <Dropdown
            value={row.thirdDropdown}
            options={row.secondDropdown === 'Second 1' ? [{ label: 'Third 1', value: 'Third 1' }, { label: 'Third 2', value: 'Third 2' }] : [{ label: 'Third 3', value: 'Third 3' }, { label: 'Third 4', value: 'Third 4' }]}
            onChange={(e) => handleDropdownChange(index, 'thirdDropdown', e.value)}
            placeholder="Select Third"
            className="p-col"
            disabled={!row.secondDropdown}
            multiple
          />
          <Calendar value={row.startDate} disabled className="p-col" />
          <Calendar value={row.endDate} disabled className="p-col" />
          <Button
            label="Copy"
            icon="pi pi-copy"
            onClick={() => handleAddRow(index)}
            className="p-col"
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            onClick={() => handleRemoveRow(index)}
            className="p-col"
            disabled={rows.length === 1}
          />
        </div>
      ))}
    </div>
  );
};

export default FormComponent;