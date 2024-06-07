import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/primereact.min.css';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FormRow, formRowsState } from '../states/atoms';

const SecondStepComponent: React.FC = () => {
  const [rows, setRows] = useRecoilState(formRowsState);

  useEffect(() => {
    const newRows: FormRow[] = [];
    rows.forEach(row => {
      if (row.thirdDropdown.length > 1) {
        row.thirdDropdown.forEach(value => {
          newRows.push({
            id: newRows.length + 1,
            firstDropdown: row.firstDropdown,
            secondDropdown: row.secondDropdown,
            thirdDropdown: [value],
            startDate: null,
            endDate: null,
          });
        });
      } else {
        newRows.push(row);
      }
    });
    setRows(newRows);
  }, []);

  const handleDateChange = (index: number, key: 'startDate' | 'endDate', value: Date | unknown) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [key]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddEmptyRow = () => {
    const newRow: FormRow = {
      id: rows.length + 1,
      firstDropdown: null,
      secondDropdown: null,
      thirdDropdown: [],
      startDate: null,
      endDate: null,
    };
    setRows([...rows, newRow]);
  };

  return (
    <div className="form-container">
      {rows.map((row, index) => (
        <div key={row.id} className="form-row p-grid p-align-center p-mb-2 my-2">
          <Dropdown
            value={row.firstDropdown}
            options={[{ label: 'First 1', value: 'First 1' }, { label: 'First 2', value: 'First 2' }]}
            placeholder="Select First"
            className="p-col"
            disabled
          />
          <Dropdown
            value={row.secondDropdown}
            options={row.firstDropdown === 'First 1' ? [{ label: 'Second 1', value: 'Second 1' }, { label: 'Second 2', value: 'Second 2' }] : [{ label: 'Second 3', value: 'Second 3' }, { label: 'Second 4', value: 'Second 4' }]}
            placeholder="Select Second"
            className="p-col"
            disabled
          />
          <MultiSelect
            value={row.thirdDropdown}
            options={row.secondDropdown === 'Second 1' ? [{ label: 'Third 1', value: 'Third 1' }, { label: 'Third 2', value: 'Third 3' }, { label: 'Third 2', value: 'Third 3' }] : [{ label: 'Third 4', value: 'Third 4' }, { label: 'Third 5', value: 'Third 5' }, { label: 'Third 6', value: 'Third 6' }]}
            placeholder="Select Third"
            className="p-col"
            disabled
          />
          <Calendar
            value={row.startDate}
            onChange={(e) => handleDateChange(index, 'startDate', e.value)}
            placeholder="Start Date"
            className="p-col"
          />
          <Calendar
            value={row.endDate}
            onChange={(e) => handleDateChange(index, 'endDate', e.value)}
            placeholder="End Date"
            className="p-col"
          />
          <Button
            icon="pi pi-copy"
            className="p-col button-icon"
            disabled
          />
          <Button
            icon="pi pi-trash"
            className="p-col button-icon"
            disabled
          />
        </div>
      ))}
      <div className="add-empty-row">
        <Button label="Add Empty Row" icon="pi pi-plus" iconPos='left' size='small' className="w-11rem my-3" onClick={handleAddEmptyRow} />
      </div>
    </div>
  );
};

export default SecondStepComponent;
