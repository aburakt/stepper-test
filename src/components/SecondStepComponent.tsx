/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { formRowsState } from '../states/atoms';

const SecondStepComponent: React.FC = () => {
  const [rows, setRows] = useRecoilState(formRowsState);

  const handleDateChange = (index: number, key: 'startDate' | 'endDate', value: Date) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [key]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div className="form-container">
      {rows.map((row, index) => (
        <div key={row.id} className="form-row p-grid p-align-center p-mb-2">
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
          <Dropdown
            value={row.thirdDropdown}
            options={row.secondDropdown === 'Second 1' ? [{ label: 'Third 1', value: 'Third 1' }, { label: 'Third 2', value: 'Third 2' }] : [{ label: 'Third 3', value: 'Third 3' }, { label: 'Third 4', value: 'Third 4' }]}
            placeholder="Select Third"
            className="p-col"
            disabled
            multiple
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
        <Button label="Add Empty Row" onClick={() => { }} disabled />
      </div>
    </div>
  );
};

export default SecondStepComponent;
